//clearTimeout
var x = 0
var myTimer = setTimeout(function() {
    console.log(`O x é 0`)
}, 1500)

var x = 5

if(x > 0) {
    clearTimeout(myTimer)
    console.log('O X passou de 0')
}

//clearInterval
var myInterval = setInterval(function() {
    console.log('Imprimindo interval')
}, 500)

setTimeout(() => {
    console.log('Não precisamos mais repetir')
    clearInterval(myInterval)
}, 1500);
