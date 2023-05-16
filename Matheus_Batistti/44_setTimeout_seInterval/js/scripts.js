//setTimeout
console.log('Antes do setTimeout')

setTimeout(function(){
console.log('Testando o setTimeout')
}, 2000) //função setTimeout + functon + milisegundos para executar a function

console.log('Depois do settimeout')

//setInterval
setInterval(function() {
    console.log('testando setInterval')
}, 1000)