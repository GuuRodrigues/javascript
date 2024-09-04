const lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

let body = document.querySelector('body');

let listaUl = document.createElement('ul')

body.appendChild(listaUl);

let listaNoBody = document.querySelector('ul');

for(let i = 0; i < lista.length; i++) {
    let LiFor = document.createElement('li');
    let TextoLi = document.createTextNode(lista[i]);

    LiFor.appendChild(TextoLi);

    listaNoBody.appendChild(LiFor);
}