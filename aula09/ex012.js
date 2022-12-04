var agora = new Date();
var Aminutos = new Date();
var min = Aminutos.getMinutes();
var hora = agora.getHours();

console.log(`Agora são exatamente ${hora} horas e ${min}.`);

if (hora <+ 12) {
    console.log('Bom dia!!');
} else if (hora <= 18) {
    console.log ('Boa tarde!!');
} else {
    console.log('Boa noite');
}