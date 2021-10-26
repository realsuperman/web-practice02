async function a(){
    try{
        let b = await 10;
    }catch(error){
        console.log(error);
    }
}

const a = async ()=>{
    try{
        let b = await 10;
    }catch(error){
        console.log(error);
    }
}

a.then((result)=>{

});