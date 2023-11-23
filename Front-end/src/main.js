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

    const lembretes = {
      name: tarefaFormatada,
      data: diaSelecionado,
      categoria: 'tarefa',
    };

    axios.post('http://localhost:4000/tasks', lembretes).then(()=> console.log = 'OK')

    // Atualize a exibição das tarefas
    exibirTarefas(diaSelecionado);

    // Limpe o input
    tarefaInput.value = '';



  }
}

// Evento de escuta para a tecla Enter no input-tarefa
document.getElementById('input-tarefa').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
      adcTarefa();
  }
});

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

function Carregar(){
  axios.get('http://localhost:4000/tasks', lembretes).then(()=> console.log = 'OK')
}

function limparTodasTarefas() {

  // Limpa o array
  tarefas.segunda = [];
  tarefas.terca = [];
  tarefas.quarta = [];
  tarefas.quinta = [];
  tarefas.sexta = [];
  tarefas.sabado = [];
  tarefas.domingo = [];

  // Atualize a exibição das tarefas após a limpeza
  exibirTarefas('segunda');
  exibirTarefas('terca');
  exibirTarefas('quarta');
  exibirTarefas('quinta');
  exibirTarefas('sexta');
  exibirTarefas('sabado');
  exibirTarefas('domingo')


  tarefaWrapper.innerHTML=('')
}

function darkMode(){
    // Esconde o botão de modo escuro e mostra o de modo claro
    document.getElementById('dark').classList.add('hide')
    document.getElementById('light').classList.remove('hide')

    // Altera Titulo
    document.querySelector('#titulo').classList.add('tituloDark')
    document.querySelector('#titulo').classList.remove('tituloLight')

    //Altera cabeçalho
    document.querySelector('#cabeca').classList.add('cabecaDark')
    document.querySelector('.DarkModeButtons').classList.add('cabecaDark')

    //Altera todo o fundo
    document.querySelector('html').classList.add('darkPage')

    //Altera estilo dos cartoes
    document.querySelectorAll('.conteiner').forEach(function (card) {
        card.classList.add('conteiner-cardDark');
        card.classList.remove('conteiner-card');
    });

    //Altera cabeçalho dos cartoes
    document.querySelectorAll('.header-card').forEach(function (header) {
        header.classList.add('header-cardDark');
        header.classList.remove('header-card');
    });

    // Altera o estilo do texto da tarefa
    document.querySelectorAll('.text-tarefa').forEach(function (textTarefa) {
        textTarefa.classList.remove('text-light');
        textTarefa.classList.add('text-dark');
    });

    //Altera as tarefas
    document.querySelectorAll('.tarefas').forEach(function (tarefas){
        tarefas.classList.add('tarefasDark')
        tarefas.classList.remove('tarefasLight')

})
// Altera a cor do texto da header-adicionarTarefa para branco
document.querySelector('.header-adicionarTarefa').style.color = 'white';

// Altera a cor do texto da body-adicionarTarefas para branco
document.querySelector('.body-adicionarTarefas').style.color = 'white';
document.getElementById('select-dia').style.backgroundColor = 'white';

}


function lightMode() {
  // Esconde o botão de modo claro e mostra o de modo escuro
  document.getElementById('dark').classList.remove('hide');
  document.getElementById('light').classList.add('hide');

  // Altera o estilo do título
  document.querySelector('#titulo').classList.remove('tituloDark');
  document.querySelector('#titulo').classList.add('tituloLight');

  // Altera o estilo do cabeçalho
  document.querySelector('#cabeca').classList.remove('cabecaDark');

  // Remove o estilo de modo escuro do HTML
  document.querySelector('html').classList.remove('darkPage');

  // Altera o estilo dos cartões
  document.querySelectorAll('.conteiner-cardDark').forEach(function (card) {
    card.classList.remove('conteiner-cardDark');
    card.classList.add('conteiner-card');
  });

  // Altera o estilo dos cabeçalhos dos cartões
  document.querySelectorAll('.header-cardDark').forEach(function (header) {
    header.classList.remove('header-cardDark');
    header.classList.add('header-card');
  });

  // Altera o estilo do texto da tarefa
  document.querySelectorAll('.text-tarefa').forEach(function (textTarefa) {
    textTarefa.classList.add('text-light');
    textTarefa.classList.remove('text-dark');
  });

  //Altera as tarefas
  document.querySelectorAll('.tarefas').forEach(function (tarefas){
    tarefas.classList.remove('tarefasLight')
    tarefas.classList.remove('tarefasDark')
})

// Altera a cor do texto da header-adicionarTarefa para preto (ou a cor desejada para o modo claro)
document.querySelector('.header-adicionarTarefa').style.color = 'black';

// Altera a cor do texto da body-adicionarTarefas para preto (ou a cor desejada para o modo claro)
document.querySelector('.body-adicionarTarefas').style.color = 'black';
document.getElementById('select-dia').style.color = 'black';

}