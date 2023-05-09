const lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão']

const listaUl = document.createElement('ul')
const body = document.querySelectorAll('body')

body[0].appendChild(listaUl)

const listaNoBody = document.querySelectorAll('ul')

for(var i = 0; i < lista.length; i++) {
   const liFor = document.createElement('li') 
   const textoLi = document.createTextNode(lista[i])

   liFor.appendChild(textoLi)
   listaNoBody[0].appendChild(liFor)
}