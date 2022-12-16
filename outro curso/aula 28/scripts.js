//toLowerCase e toUpperCase

var frase = 'Esta é a frase que vamos manipular';
var fraseCaixaAlta = frase.toLocaleUpperCase();

console.log(fraseCaixaAlta);
console.log(frase.toLocaleLowerCase());

// trim

var nome = '    Augusto    ';
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

//split

console.log(frase.split(' '));

var tags = 'PHP, JavaScript, HTML e CSS';
console.log(tags.split(', '))

//lastIndexOf

var fraseDois = 'Eu quero a última palavra teste desta frase de teste';

console.log(fraseDois.lastIndexOf('teste'));