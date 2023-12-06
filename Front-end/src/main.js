

// Declarando a variável tarefas no escopo global
var tarefas = {
  segunda: [],
  terca: [],
  quarta: [],
  quinta: [],
  sexta: [],
  sabado: [],
  domingo: [],
};

// Função para adicionar tarefa ao dia selecionado
function adcTarefa(dia) {
  // Obtenha o valor do input de tarefa
  const tarefaInput = document.getElementById('input-tarefa');
  const tarefaTexto = tarefaInput.value.trim();

  // Verifique se o input não está vazio
  if (tarefaTexto !== '') {
    // Obtenha o valor selecionado do dropdown (dia)
    const selectDia = document.getElementById('select-dia');
    const diaSelecionado = selectDia.value.toLowerCase();

    // Formate a tarefa para ter a primeira letra maiúscula e o resto minúsculo
    const tarefaFormatada = tarefaTexto.charAt(0).toUpperCase() + tarefaTexto.slice(1).toLowerCase();

    // Adicione a tarefa ao array de tarefas do dia correspondente
    tarefas[diaSelecionado].push(tarefaFormatada);

    // Crie um id para a tarefa (por exemplo, o índice no array)
    const tarefaId = tarefas[diaSelecionado].length - 1;

    axios.post('http://localhost:4000/tasks', {
      "nome": tarefaFormatada,
      "data": diaSelecionado,
      "categoria": "tarefa",
      "concluído": 'false'
    })
      .then(r => console.log("ok"))
      .catch(e => console.log(e));

    // Atualize a exibição das tarefas
    exibirTarefas(diaSelecionado);

    // Limpe o input
    tarefaInput.value = '';
  }
}

// Função para exibir tarefas do dia
function exibirTarefas(dia) {
  const tarefasContainer = document.getElementById(dia);
  const tarefasDia = tarefas[dia];

  // Limpe o conteúdo atual
  tarefasContainer.innerHTML = '';

  // Adicione cada tarefa ao container
  tarefasDia.forEach((tarefa) => {

    // Crie uma div para envolver cada tarefa e checkbox
    const tarefaWrapper = document.createElement('div');
    tarefaWrapper.style.display = 'flex'; // Adicione um estilo flexível (cb fica do lado da tarefa)

    // Crie um checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';

    // Adicione a tarefa ao container
    const tarefaElemento = document.createElement('div');
    tarefaElemento.textContent = tarefa;

    // Adicione botão de observação
    const obsBtn = document.createElement('button');
    obsBtn.innerHTML = '<i class="fa-solid fa-exclamation"></i>';
    obsBtn.style.marginLeft = '10px';
    obsBtn.style.backgroundColor = 'none';
    obsBtn.onclick = () => exibirPopup(tarefa, dia); // Exibir a tarefa como conteúdo do pop-up

    // Adicione o checkbox, a tarefa e o botão de observação ao wrapper
    tarefaWrapper.appendChild(checkbox);
    tarefaWrapper.appendChild(tarefaElemento);
    tarefaWrapper.appendChild(obsBtn);

    // Adicione o wrapper ao container principal
    tarefasContainer.appendChild(tarefaWrapper);

    // Adicione um event listener para o evento 'change' (quando o estado do checkbox muda)
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        console.log('O checkbox foi marcado!');
        axios.put('localhost:4000', { "texto": tarefa, "data": dia, "categoria": "tarefa", "concluído": "true" })
      } else {
        console.log('O checkbox foi desmarcado!');
        axios.put('localhost:4000', { "texto": tarefa, "data": dia, "categoria": "tarefa", "concluído": "false" })
      }
    });

  });
}

function exibirPopup(texto, dia) {
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');
  const obsInput = document.getElementById('OBS');
  const addObsBtn = document.getElementById('addOBS');

  document.getElementById('body').classList.add('escurinho')

  // Exiba o pop-up
  popup.style.display = 'block';

  // Atualize o conteúdo do pop-up
  popupContent.textContent = texto;

  // Limpe o input de observação
  obsInput.value = '';

  // Remova qualquer observação anterior
  const observacaoAnterior = document.getElementById('observacao-anterior');
  if (observacaoAnterior) {
    observacaoAnterior.remove();
  }

  // Adicione um event listener para o botão "Adicionar Observação"
  addObsBtn.onclick = function () {
    const observacaoTexto = obsInput.value.trim();

    if (observacaoTexto !== '') {
      // Crie um parágrafo para exibir a observação
      const observacaoParagrafo = document.createElement('p');
      observacaoParagrafo.id = 'observacao-anterior';
      observacaoParagrafo.textContent = observacaoTexto;
      observacaoParagrafo.style.marginTop = '10px'
      observacaoParagrafo.style.fontSize = '15pt'
      // Adicione a observação ao pop-up content
      popupContent.appendChild(observacaoParagrafo);

      // Faça o post para o localhost:5000
      axios.post('http://localhost:5000', { "texto": observacaoTexto, "id": tarefas[dia].indexOf(texto) })
        .then(r => console.log("Observação adicionada"))
        .catch(e => console.log(e));

      // Limpe o input de observação
      obsInput.value = '';
    }
  };
}

// Função para fechar o pop-up
function fecharPopup() {
  const popup = document.getElementById('popup');

  document.getElementById('body').classList.remove('escurinho')


  // Remova a classe de escurecimento do fundo
  document.body.classList.remove('popup-open');

  // Oculte o pop-up
  popup.style.display = 'none';
}

function limparTodasTarefas() {
  // Obtenha todos os elementos com a classe 'tarefas'
  const elementosTarefas = document.querySelectorAll('.tarefas');

  // Itere sobre os elementos e limpe o conteúdo
  elementosTarefas.forEach(elemento => {
    elemento.innerHTML = '';
  });

  // Opcional: Chame a API ou qualquer outra ação que você precise realizar para limpar as tarefas no backend (servidor).
  // Exemplo com Axios:
  axios.delete('http://localhost:4000/tasks')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
}

