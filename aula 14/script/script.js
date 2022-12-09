function calcular() {
    var txtnum = document.getElementById('txtnum');
    var res = document.getElementById('res');
    
    if (txtnum.value.length == 0) {
        window.alert('Digite um número por favor');
    } else {
        var num = Number (txtnum.value);
        res.innerHTML = '';

        for(var i = 0; i<=10; i++){
            let item = document.createElement('option');
            item.text = `${num + 'X' + i + '=' +  num * i}`;
            item.value = `${i}`;
            res.appendChild(item);
        }
    }

}