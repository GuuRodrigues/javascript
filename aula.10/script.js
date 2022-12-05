function carregar() {

    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} Horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'morning.png'; 
        document.body.style.background = '#e2cd9f';

    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!! 
        img.src = 'afternoom.png';
        document.body.style.background = '#b9846f';
    } else {
        //BOA NOITE!!
        img.src = 'nigth.png';
        document.body.style.background = '#515154';
    }

}


