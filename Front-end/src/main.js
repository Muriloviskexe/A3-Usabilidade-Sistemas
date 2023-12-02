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
function adcTarefa() {
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


    axios.post('http://localhost:4000', { "texto": tarefaFormatada, "data": diaSelecionado, "categoria": "tarefa" })
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
    const tarefaElemento = document.createElement('div');
    tarefaElemento.textContent = tarefa;
    tarefasContainer.appendChild(tarefaElemento);
  });
}

// Supondo que você deseja exibir uma observação correspondente a cada tarefa no mesmo card
function adcObservacao(dia) {
  const observacaoInput = document.getElementById('OBS');
  const observacaoTexto = observacaoInput.value.trim();

  if (observacaoTexto !== '') {
    const tarefasDia = tarefas[dia];

    // Adiciona a observação ao array de observações do dia correspondente
    tarefasDia.forEach((tarefa, index) => {
      const observacaoContainer = document.getElementById(`observacao-${dia}-${index}`);
      const observacaoElemento = document.createElement('div');
      observacaoElemento.textContent = observacaoTexto;
      observacaoContainer.appendChild(observacaoElemento);
    });

    // Limpa o input
    observacaoInput.value = '';
  }
}

  observacaoDia.forEach((tarefa) => {
    const obsElemento = document.createElement('div');
    obsElemento.textContent = tarefa;
    tarefasContainer.appendChild(tarefaElemento);
  });

function limparTodasTarefas() {
  // Limpa o array
  Object.keys(tarefas).forEach((dia) => {
    tarefas[dia] = [];
    exibirTarefas(dia);
  });

  // Limpa o wrapper
  tarefaWrapper.innerHTML = '';
}