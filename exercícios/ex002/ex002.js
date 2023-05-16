function primo() {
    var n1 = 7
    var cont = 0
    for(var i=0; i<10; i++) {
        if(n1 % i == 0) {
            cont++
        }
    }

    if(cont == 2) {
        return true
    } else {
        return false
    }
}

console.log(primo())
