var num = [4, 2, 1, 9];
num.push(3);

num.sort();
console.log(`${num}`);
console.log(`O vetor tem ${num.length} posições`);

for(var i = 0; i< num.length; i++) {
    console.log(`${num[i]}`);
}

for(let i in num) {
    console.log(`A posição ${i} tem o número ${num[i]}`);
}

console.log(`O número 4 está na posição ${num.indexOf(4)}`);

let pos = num.indexOf(7)
if(pos == -1){
    console.log('Valor não encontrado');
} else {
    console.log(`O valor está na posição ${pos}`)
}