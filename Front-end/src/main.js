
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
    document.querySelectorAll('.conteiner-card').forEach(function (card) {
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
}


function adcTarefa(diaDaSemana) {
    var tarefaInput = document.querySelector(`#input-${diaDaSemana}`);
    var listaTarefas = document.getElementById(diaDaSemana);

    const value = capitalizeFirstLetter(tarefaInput.value.trim());


    if (value !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = value;
        listaTarefas.appendChild(novaTarefa);

        tarefaInput.value = ''; // Limpa o campo de entrada após adicionar a tarefa
    } else {
        null
    }
}

function adicionarTarefaBotao(diaDaSemana) {
    adcTarefa(diaDaSemana);
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    adcTarefa('segunda'); // Substitua 'segunda' pelo dia da semana desejado
    adcTarefa('terca');
    adcTarefa('quarta');
    adcTarefa('quinta');
    adcTarefa('sexta');
    adcTarefa('Sabado');
    adcTarefa('Domingo');
});


document.querySelector('#adicionar-segunda').addEventListener('click', function () {
    adicionarTarefaBotao('segunda');
});

// Repita o processo para os outros dias da semana
document.querySelector('#adicionar-terca').addEventListener('click', function () {
    adicionarTarefaBotao('terca');
});

document.querySelector('#adicionar-quarta').addEventListener('click', function () {
    adicionarTarefaBotao('quarta');
});

document.querySelector('#adicionar-quinta').addEventListener('click', function () {
    adicionarTarefaBotao('quinta');
});

document.querySelector('#adicionar-sexta').addEventListener('click', function () {
    adicionarTarefaBotao('sexta');
});

document.querySelector('#adicionar-Sabado').addEventListener('click', function () {
    adicionarTarefaBotao('Sabado');
});

document.querySelector('#adicionar-Domingo').addEventListener('click', function () {
    adicionarTarefaBotao('Domingo');
});

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}