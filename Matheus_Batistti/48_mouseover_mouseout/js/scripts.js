//Evento de mouseover
var title = document.querySelector('#title')

title.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'Yellow'
})

//mouseout
title.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'White'
})

//afetar outro elemento com mouseover
var subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('mouseover', function name() {
    var legenda = document.querySelector('#legenda')

    legenda.classList.remove('hide')
})