function reverseString() {
    var frase = 'Esta é uma frase aleatória'
    var arr = frase.split(' ')
    var reverseArr = arr.reverse()
    frase = reverseArr.join(' ')

    return frase

    
}

console.log(reverseString())