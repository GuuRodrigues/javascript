//Criando elemento
var el = document.createElement('h3')

el.classList = 'testando-classe'

var texto = document.createTextNode('Este é o texto do h3')
el.appendChild(texto)

console.log(el)

//selecionar elemento que deseja trocar
var title = document.querySelector('#title')

//selecionar o pai do elemento
var pai = title.parentNode

//trocar os elementos
pai.replaceChild(el, title)