// length

var arr = [1,2,3,4,5]
console.log(arr.length)

//push (adiciona no final do array)

arr.push(6)
console.log(arr)

//pop (remove no final do array)

arr.pop()
console.log(arr)

//unshift (adiciona no inicio do array)

arr.unshift(0)
console.log(arr) 

//shift (remove no inicio do array)

arr.shift()
console.log(arr)

//acessar o último elemento do array

console.log(arr[arr.length-1])

//isArray
console.log(Array.isArray(5))
console.log(Array.isArray(arr))