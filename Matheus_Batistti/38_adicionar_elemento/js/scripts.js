//criar elemento
var el = document.createElement('div')

el.classList = 'div-criada' //adicionando class à uma div
console.log(el)

var conatiner = document.querySelector('#container')
container.appendChild(el)

//insertBefore
var el2 = document.createElement('div')
el2.classList = 'div-before'

container.insertBefore(el2, el)