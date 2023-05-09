var name = 'Augusto'

console.log(name.length)

var obj = 'Bola'

console.log(obj.length)

//indexOf (mostra o indice do elemento)

console.log(name[2])

var frase = 'O rato roeu a roupa do rei de Roma'

console.log(frase.indexOf('roeu'))

//slice (extrai um elemento)

var roeu = frase.slice(7, 11)
console.log(roeu)
    
//Replace (troca uma palavra)

var novaFrase = frase.replace('roeu', 'teste')
console.log(novaFrase)