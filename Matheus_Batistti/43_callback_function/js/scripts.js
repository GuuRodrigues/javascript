/*function exibir(num) {
    console.log('A operação resultou em: '+ num)
}

function soma (a, b, cb) {
    var op = a + b 
    cb(op)
}

function mult(a, b, cb) {
    var op = a * b
    cb(op)
}

soma(2, 2, exibir)
mult(2, 4, exibir)
*/

function exibir(num) {
    console.log(`A operaçÃo resultou em: ${num}`)
}

function soma(a, b, cb) {
    var op = a + b
    cb(op)
}

function mult(a, b, cb) {
    var op = a * b
    cb(op)
}

soma(2, 2, exibir)
mult(9, 9, exibir)