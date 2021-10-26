var a = {
    b : function(){
        var c = 'qwe';
        console.log(this.c);
    },
    d : ()=>{
        var c = 15;
        console.log(c);
    },
    c : 'test',
}

function A(){
    this.name = 'csh';
    this.birthday = '19981029';
}

function D(){}
/*D.name = 'csh';
D.getter = function(){
    console.log("test");
}*/
//D.prototype.getter = function(){
//    console.log("test");
//};
//D.getter();
//let csh = new D();
//csh.getter();
//let test = new A();
//console.log(test);

let array = [{
    name : '고구마',
    price : 1000
},
{
    name : '감자',
    price : 500
},{
    name : '바나나',
    price : 400
}]

array.sort((A,B)=>A.price-B.price);
console.log(`${array[0].price} ${array[1].price} ${array[2].price}`);

array.sort((A,B)=>{
    if(A.name < B.name){
        return 1;
    }else if(A.name > B.name){
        return -1;
    }else{
        return 0;
    }
});
console.log(`${array[0].name} ${array[1].name} ${array[2].name}`);