const myPromise = new Promise((resolve, reject)=> {
    const nome = 'Augusto';

    if(nome === 'Augusto'){
        resolve('O usuário Augusto foi encontrado');
    } else {
        reject('O susuário Augusto não foi encontrado');
    }
});

myPromise.then((data)=> {
    console.log(data);
})

//encadeamento de then`s

const myPromise2 = new Promise((resolve, reject)=> {
    const nome = 'Augusto';

    if(nome === 'Augusto'){
        resolve('O usuário Augusto foi encontrado');
    } else {
        reject('O susuário Augusto não foi encontrado');
    }
});

myPromise2.then((data)=>{
    return data.toLowerCase();
}).then((StringModificada)=> {
    console.log(StringModificada);
});


//reject

const myPromise3 = new Promise((resolve, reject)=> {
    const nome = 'João';

    if(nome === 'Augusto'){
        resolve('O usuário Augusto foi encontrado');
    } else {
        reject('O susuário Augusto não foi encontrado');
    }
});

myPromise3.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log('Aconteceu um erro: ' + err);
})

//resolver varias promessas