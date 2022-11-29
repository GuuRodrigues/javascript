var a = window.document.getElementById('area');

a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar() {
    // a.innerText = 'Clicou';
    //a.style.background = 'red';
    if(a.innerText == 'Clicou' && a.style.background == 'red') {
        a.innerText = 'interaja...';
        a.style.background = 'rgb(73, 172, 73)';
    } else {
        a.innerText = 'Clicou';
        a.style.background = 'red';
    }
}

function entrar() {
    a.innerText = 'Entrou'; 
}

function sair() {
    a.innerText = 'Saiu';
}