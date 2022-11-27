var obj = {
    name: "Augusto",
    age: 19,
    prof: "Programmer"
};

console.log(obj);
console.log(typeof obj);

//acessando propriedade do objeto
console.log(obj.name); 
console.log(obj.age);
console.log(obj.prof);

console.log("O meu nome é " + obj.name);

//mudar valor de uma propriedade
obj.name = "Marcone";

console.log(obj.name);

//criar propriedade no objeto

obj.working = true;

console.log(obj);