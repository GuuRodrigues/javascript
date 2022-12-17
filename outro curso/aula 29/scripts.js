// length
var arr = [1,2,3,4,5];
console.log(arr.length);

//push

arr.push(6);
arr.push('Qualquer coisa');
console.log(arr);

//pop

arr.pop();
console.log(arr);

//Unshift

arr.unshift(0);
console.log(arr);

//Shift

arr.shift();
console.log(arr);


//acessar último elemento

console.log(arr[arr.length - 1]);

//IsArray

console.log(Array.isArray(7));
console.log(Array.isArray(arr));