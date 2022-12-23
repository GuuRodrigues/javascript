// This

let person = {
    name: 'Augusto',
    age: 19,
    falar: function() {
        console.log('Hello, How are you?');
    },
    soma: function(a, b){
        return a+b;
    },
    dizerNome: function() {
        console.log('My name is '+this.name);
    },
    aniversario: function() {
        this.age += 1;
    },
    saudacao: function() {
        return 'Mr.' + this.name;
    }
};

person.dizerNome();
console.log(person.age);
person.aniversario();
console.log(person.age);
let sdc = person.saudacao();
console.log('Hello ' + sdc);