var arr = [5, "Augusto", true, {teste: 1, teste: 2}]; //obj => {}

console.log(arr);

var arr2 = [2, 3, 4, 5, 6];

console.log(arr2);  

console.log(arr[1]); //acessar cada item do array
console.log(arr2[0]);

//inserir elemento no array sem o var

arr[4] = 10;
console.log(arr);

//sobreescrever o valor

arr[0] = 19;
console.log(arr);