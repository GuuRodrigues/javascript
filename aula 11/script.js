function verificar() {
    var data  = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('iano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('sex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked) {
            genero = 'Homem';

            if (idade>=0 && idade<=10){
                img.setAttribute('src', 'imgs/homem-crianca.png')
            } else if (idade<21) {
                img.setAttribute('src', 'imgs/homem-jovem.png')
            } else if (idade<50) {
                img.setAttribute('src', 'imgs/homem-adulto.png');
            } else {
                img.setAttribute('src', 'imgs/homem-idoso.png');
            }   

        } else if (fsex[1].checked) {
            genero = 'Mulher';

            if (idade>=0 && idade<=10){
                img.setAttribute('src', 'imgs/criança-mulher.png');
            } else if (idade<21) {
                img.setAttribute('src', 'imgs/mulher-jovem.png')
            } else if (idade<50) {
                img.setAttribute('src', 'imgs/mulher-adulta.png');
            } else {
                img.setAttribute('src', 'imgs/mulher-idosa.png');
            } 
        }
        res.innerHTML = `Detectamos genero ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}