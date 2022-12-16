for(var i = 10; i > 0; i--){
    console.log('contando' + i);
    if(i === 6){
        break;
    }
}

var x = 10;

while(x < 100) {
    x+=10;
    if(x===60 || x ===90){
        continue;
    }

    console.log('testando continue' + x);
}