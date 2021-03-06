/*function delay(sec,callback){
    setTimeout(()=>{
        callback(new Date().toISOString());
    },sec*1000);
}

delay(1,(result)=>{
    console.log(1,result);
    delay(1,(result)=>{
        console.log(2,result);
        delay(1,(result)=>{
            console.log(3,result);
        });
    });
});*/

function delay(sec){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(new Date().toISOString());
        },sec*1000);
    });
}

delay(1).then(p=>{
    console.log(p);
    return delay(1);
}).then(p=>{
    console.log(p);
});