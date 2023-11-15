
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

function adcTarefa(){
    var tarefa = document.querySelector('#input-segunda');
     const value = tarefa.value.trim(); // Remova espaços em branco antes e depois do valor

     if (value !== '') {
         const segunda = document.getElementById('segunda');
         const novaTarefa = document.createElement('li');
         novaTarefa.textContent = value;
         segunda.appendChild(novaTarefa);

         tarefa.value = ''; // Limpa o campo de entrada após adicionar a tarefa
     } else {
         null
     }
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    adcTarefa()
})