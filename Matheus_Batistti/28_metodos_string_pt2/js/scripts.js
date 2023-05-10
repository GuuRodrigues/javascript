//toLowerCase e toUpperCase

var frase  = 'Esta é a frase que vamos manipular'

console.log(frase.toLocaleLowerCase())
console.log(frase.toUpperCase())

//trim (retira espaços desnecessários)

var name = '     Augusto     '
console.log(name)

const nameTrim = name.trim()
console.log(nameTrim)

//split (transforma uma string em um array)

console.log(frase.split(" "))

var tags = 'PHP, JavaScript, HTML, CSS'
console.log(tags.split(', '))

//lastIndexOf (acha o índice da última palavra repetida)

var fraseDois = ('Eu quero a última palavra teste desta frase teste')
console.log(fraseDois.indexOf('teste'))
console.log(fraseDois.lastIndexOf('teste'))