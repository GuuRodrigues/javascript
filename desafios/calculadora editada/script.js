//atribuindo elementos
const button = document.querySelectorAll('.btn.number')
const operadores = document.querySelectorAll('.oper')
const display = document.querySelector('#resultado')
let conteudoVisor = ''


button.forEach(button => {
    button.addEventListener('click', function insert() {
        conteudoVisor += button.textContent
        display.innerHTML = conteudoVisor
    })

})

operadores.forEach(operadores => {
    operadores.addEventListener('click', function insert() {
        conteudoVisor += operadores.textContent
        display.innerHTML = conteudoVisor
    })
})

const clear = document.querySelector('.btn')

clear.addEventListener ('click', function limpar() {
    conteudoVisor = ''
    display.innerHTML = conteudoVisor
})

const back = document.querySelector('.btn:nth-child(2)')   

back.addEventListener('click', function apagar() {
    conteudoVisor = conteudoVisor.substring(0, conteudoVisor.length -1)
    display.innerHTML = conteudoVisor
})