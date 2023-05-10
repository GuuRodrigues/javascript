// splice (adiciona um indice no meio do array, apaga elemento especifico)

var arr = [1,2,3,4,5]
console.log(arr)

arr.splice(2, 0, 2.5)//(indice a ser adicionado, elementos a ser apagado, valor a ser adicionado)
console.log(arr)

arr.splice(4, 1)
console.log(arr)

//indexOf (indice do elemento)

console.log(arr.indexOf(5))

//join (transforma array em uma string)

var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'Roma']
var strDoArray = arr2.join(' ')
console.log(strDoArray)

//reverse (inverte o array)

console.log(arr2.reverse())