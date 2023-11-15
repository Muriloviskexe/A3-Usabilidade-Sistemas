
function darkMode(){

document.getElementById('dark').classList.add('hide')
document.getElementById('light').classList.remove('hide')
document.querySelector('#titulo').classList.add('tituloDark')
document.querySelector('#titulo').classList.remove('tituloLight')
document.querySelector('#cabeca').classList.add('cabecaDark')
document.querySelector('.DarkModeButtons').classList.add('cabecaDark')
document.querySelector('html').classList.add('darkPage')
document.querySelector('#conteiner-card').classList.add('conteiner-cardDark')
document.querySelector('#conteiner-card').classList.remove('conteiner-card')
document.querySelector('#header-card').classList.add('header-cardDark')
document.querySelector('#header-card').classList.remove('header-card')
document.querySelector('.text-tarefa').classList.remove('text-light')
document.querySelector('.text-tarefa').classList.add('text-dark')

}

function lightMode(){

document.getElementById('dark').classList.remove('hide')
document.getElementById('light').classList.add('hide')
document.querySelector('#titulo').classList.remove('tituloDark')
document.querySelector('#titulo').classList.add('tituloLight')
document.querySelector('#cabeca').classList.remove('cabecaDark')
document.querySelector('html').classList.remove('darkPage')
document.querySelector('#conteiner-card').classList.remove('conteiner-cardDark')
document.querySelector('#conteiner-card').classList.add('conteiner-card')
document.querySelector('#header-card').classList.remove('header-cardDark')
document.querySelector('#header-card').classList.add('header-card')
document.querySelector('.text-tarefa').classList.add('text-light')
document.querySelector('.text-tarefa').classList.remove('text-dark')

}

function adcTarefa(diaDaSemana) {
    var tarefaInput = document.querySelector(`#input-${diaDaSemana}`);
    var listaTarefas = document.getElementById(diaDaSemana);

    const value = tarefaInput.value.trim();

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