let person = {
    name: 'Augusto',
    age: 19,
    speak: function() {
        console.log('Olá, tudo bem? ')
    },
    sum: function(a, b) {
        return a+b
    }
}

console.log(person.name)
person.speak()
var sum2 = person.sum(3, 6)
console.log(sum2)