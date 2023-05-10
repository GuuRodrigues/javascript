console.log(this)

let person = {
    name: 'Augusto',
    age: 19,
    sepak: function() {
        console.log('Olá, tudo bem?')
    },
    soma: function(a, b) {
        return a+b
    },
    sepakName: function() {
        console.log(`O meu nome é: ${this.name}`)
    }
}

person.sepakName()