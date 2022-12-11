var num = document.getElementById('txtnum');
var tab = document.getElementById('tab');
var res = document.getElementById('res');
var valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        tab.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Número inválido ou já existente na lista.');
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores');
    } else {
        var tot = valores.length;
        var menor = valores[0];
        var maior = valores[0];
        var soma = 0;
        var media = 0;

        for(let i in valores){
            soma += valores[i];
            if(valores[i] > maior){
                maior = valores[i];
            }
            if(valores[i] < menor){
                menor = valores[i];
            }
        }

        media = soma/tot;

        res.innerHTML = '';
        res.innerHTML+= `<p>Ao todo temos ${tot} números cadastrados </p>`;
        res.innerHTML+= `<p>O menor valor digitado foi ${menor}</p>`;
        res.innerHTML+= `<p>O maior valor digitado foi ${maior}</P>`;
        res.innerHTML+= `<p>A soma dos valores digitados, é igual a ${soma}`;
        res.innerHTML+= `<p>A média desses valores é ${media}`;
    }
}
