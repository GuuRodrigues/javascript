var arr = [9, 6, 7, 1, 3, 98]
function crescente(array) {
    console.log(array)
    console.log(array.sort(function(a, b){return a - b}))
}

console.log(crescente(arr))