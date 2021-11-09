var a = 200;
function test(){
    return new Promise( (resolve,reject)=>{
    if(a%2==0){
        resolve(20);
    }else{
        reject(200);
    }
    });
}
function test2(){
    return new Promise( (resolve,reject)=>{
    if(a%2==0){
        resolve(20);
    }else{
        reject(200);
    }
    });
}

/*test().then( (result) =>{
    return test2();
}).then((result)=>{
    console.log("test");
});*/

new Promise((resolve,reject)=>{
    resolve(1);
}).then((result)=>{
    return new Promise((resolve,reject)=>{
        resolve(12);
    })
}).then((result)=>{
    console.log(result);
})
