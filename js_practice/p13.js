const f = new Promise( (resolve,reject)=>{
    if(!!" ") resolve('성공');
    else reject('실패');
});

f.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('무조건');
});