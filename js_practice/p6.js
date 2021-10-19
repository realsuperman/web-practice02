const js = [{
    name : '윤인성',
    region: '서울',
},
{
    name : '윤명월',
    region : '도쿄'
}]

const a = JSON.stringify(js);
const b = JSON.stringify(js,null,2);
console.log(typeof(a));
console.log(typeof(b));
const c = JSON.parse(b);
console.log(c);