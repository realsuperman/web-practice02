new Promise( (resolve,reject ) => {
    setTimeout( () => resolve(1), 1000);
}).then((message)=>{
   console.log(message);
   return new Promise( (resolve,reject)=>{
     setTimeout(() => resolve(message*2), 1000);
   });
}).then((message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(message*2),1000);
    });
}).then((message)=>{
    console.log(message);
})