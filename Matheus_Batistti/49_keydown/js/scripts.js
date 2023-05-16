//keydown

document.addEventListener('keydown', function (event) {
    console.log(event.key)
})

//keyup

document.addEventListener('keyup', function (e) {
    
    if(event.key === 'Enter') {
        console.log('soltou o enter')
    }
})