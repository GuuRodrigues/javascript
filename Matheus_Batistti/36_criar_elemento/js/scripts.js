var novoParagrafo = document.createElement('p')
var texto = document.createTextNode('Tsuki gai kirei desu ne')

novoParagrafo.appendChild(texto)
console.log(novoParagrafo)

var body = document.querySelector('body')
body.appendChild(novoParagrafo)

//inserir em um container
var container = document.querySelector('#container')
var el = document.createElement('span')

el.appendChild(document.createTextNode('Texto do span'))
container.appendChild(el)

var conatiner2 = document.querySelector('#container2')
var pc = document.createElement('h3')

pc.appendChild(document.createTextNode('testando mais'))
body.appendChild(pc)


