let x=5;

x=12;

const y=10;
//y=12;

console.log('let '+x);
console.log('const '+y);

if(true) {
    let x=20;
    console.log('let if '+x);

    const y=50;
    console.log('const if '+y);

}

console.log(x);

if(20 > 10) {
    const y=100;
    console.log(y);
}

for(let i=0; i<10; i++) {
    console.log(i+1);
}