let amigo = {
    nome: 'José',
    sexo: 'M', 
    peso: 85.4,
    enogrdar(p=0){
        console.log('Engordou');
        this.peso += p;
    }
}

amigo.enogrdar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}`);

let num = 8;
let res = num**=2; 

console.log(`${res}`);