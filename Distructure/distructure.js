//RestParameters,SpreadSyntax
//나머지 매개변수,전개 구문
/*******************************************
 * 나머지 매개변수
 * 전달 받은 모든 수를 더해야함
 *******************************************/
//문제
// function add() {}
// add();
// add(1,2,3,4,5,6,7,8,9,10);
function add(...parameters){
    let result = 0;
    parameters.forEach((value)=>{
        result += value;
    });
    //console.log(result);
}
add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);
/*******************************************
 * 나머지 매개변수
 * user 객체를 만ㄷ르어 주는 생성자 함수를 만듭니다.
 *******************************************/
function User(name, age, ...skill){
    this.name = name;
    this.age = age;
    this.skill = skill;
}
//...skill은 나머지 매개변수에 배열로 담깁니다.
// 중요한것은 나머지 배열은 항상 마지막에 위치해야한다.
const user1 = new User ('Mike', 30, 'HTML', 'CSS');
const user2 = new User ('Tom', 20, 'JS', 'React');
//console.log(user1);
//console.log(user2);
/*******************************************
 * 전개구문 : 배열
 * 전개구문 : 객체
 *******************************************/
//배열
//let arr1 = [1,2,3]
//let arr2 = [4,5,6]
//let result = [0,...arr1,...arr2,7,8,9];
//console.log(result);
//객체 : Object.Assign() 을 쓸 필요가 없습니다.
//let Obj = {name : 'Sean'}
//let Obj2 = {...Obj, age : 30}
//console.log(Obj2);
/*******************************************
 * 전개구문
 * arr1 을 [4,5,6,1,2,3] 으로
 *******************************************/
//  let arr1 = [1,2,3]
//  let arr2 = [4,5,6]
 //이렇게 전개구문을 사용하지 않은 코드보다
//  arr2.reverse().forEach((value)=>{
//     arr1.unshift(value);
//  });
 //...을 사용해 훨씬 간편하게 만들수있다.
 //arr1.unshift(...arr2);
//  arr1 = [...arr2,...arr1];
// console.log(arr1);
/*******************************************
 * 전개구문 객체와 배열의 혼합 사용예시
 *******************************************/
let user = { name: "Mike"};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean","English"];
//전개구문을 사용하지 않은 코드
//user = Object.assign({},user,info,{skills : fe},{lang : lang});
//전개구문을 사용한 코드
user = {
    ...user,
    ...info,
    fe : [...fe],
    lang : [...lang],
}
console.log(user);1
2:47

