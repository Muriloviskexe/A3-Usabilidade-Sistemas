
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






};

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

};
