function contar() {
    let txtinicio = document.getElementById('txtinc');
    let txtfim = document.getElementById('txtfim');
    let txtpasso = document.getElementById('txtpasso');
    let res = document.getElementById('res');
    

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = 'Contando: ';
        let inicio = Number (txtinicio.value);
        let fim = Number (txtfim.value);
        let passo = Number (txtpasso.value);
        let i;
        
        if (passo <= 0){
            alert('Passo inválido! Considerando passo = 1');
            passo = 1;
        }

        if(inicio < fim) {
            for(i = inicio; i <= fim; i += passo){
                res.innerHTML += `${i} \u{1F449}`;
            }
        } else {
            for(i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`; 
    } 
}
