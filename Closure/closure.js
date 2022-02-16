//Clousre 어휘적 환경 (Lexical Environment)
function makeAdder(x){
    return function (y){
        return x+y;
    }
}
const add10 = makeAdder(10);
//console.log(add10(5));
function makeURLS(URL){
    return function (URI){
        return URL+URI
    }
}
const Naver = makeURLS('http://naver.com/');
const naverNews = Naver('news/');
//console.log(naverNews);
//은닉화
function makeCounter() {
    let num = 0;
    return function (){
        return num++
    };
};
//코드 내부에 접근을 허용하지 못함. 임의적으로 수정 불가능 >> 은닉화
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
