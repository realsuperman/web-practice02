const a = Promise.resolve('성공');
const b = Promise.resolve('성공');

Promise.all([a,b]).then((result)=>{
    console.log("성공");
}).catch((error)=>{
    console.log("실패");
});