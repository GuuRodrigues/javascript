//adicionando elementos
const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const soma = document.querySelector('.soma')
const sub = document.querySelector('.sub')
const mult = document.querySelector('.mult')
const div = document.querySelector('.div')
const result = document.querySelector('span')

//funções das operações matemáticas
soma.addEventListener('click', function somar() {
    result.innerHTML = Number(n1.value) + Number(n2.value)
})

sub.addEventListener('click', function sub(){
    result.innerHTML = Number(n1.value) - Number(n2.value)
})

mult.addEventListener('click', function mult() {
    result.innerHTML = Number(n1.value) * Number(n2.value)
})

div.addEventListener('click', function() {
    result.innerHTML = Number(n1.value) / Number(n2.value)
})

