let pessoa = {
    nome: 'Augusto',
    idade: 19,
    falar: function() {
        console.log('Hello, World!!');
    },
    soma: function(a, b) {
        return a+b;
    },
};

console.log(pessoa.nome);
pessoa.falar();
var soma = pessoa.soma(2, 3);
console.log(soma);