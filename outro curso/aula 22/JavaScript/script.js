function primeiraFuncao() {

    console.log('Hello World of functions');
}

primeiraFuncao();

function dizerNome(nome) {

    console.log(`O nome é: ${nome}`);
}

dizerNome('Augusto');
dizerNome('Rodrigues');
dizerNome('Rocha');

var nomeDoBancoDeDados = 'João';

dizerNome(nomeDoBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var result = soma(10, 100);
console.log(`o valor é: ${result}`);

var result2 = soma(100, 130);
console.log(`O valor: ${result2}`);

console.log(`valor sem variavel: ${soma(20, 30)}`);