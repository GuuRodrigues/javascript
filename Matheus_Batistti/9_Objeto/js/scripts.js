var obj =  {
    nome: 'Augusto',
    idade: 19,
    profissao: 'Programador',
    estaTrabalhando: false
}

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)//Acessar apenas uma propriedade do objeto
console.log('Meu nome é ' + obj.nome)

obj.nome = 'Marcone'
console.log(obj.nome)

obj.graduacao = true
console.log(obj)
