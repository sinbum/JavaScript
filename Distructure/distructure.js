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
//DestructuringAssignment
let users = ['Mike','Tom','Jane'];
var [user1,user2,user3] = users;
//배열 구조분해
/*
 * let user1 = users[0];
 * let user2 = users[1];
 * let user3 = users[2];
 */
// console.log(user1);
// console.log(user2);
// console.log(user3);
//배열구조분해 설명 (예시의 사용).
//console.log(users.join('-'));
let str = "Mike-Tom-Jane";
var [user1,user2,user3] = str.split('-');// '-'단위로 쪼갤경우 방금 코드 처럼 사용가능하다.
// console.log(user1);
// console.log(user2);
// console.log(user3);
//배열 구조분해: 기본값
//변수선언에 해당값이 없다면 undefined로 된다. 이럴경우 초기화를 선언. 초기화는 user4='unNamed' 이런식..
var [user1,user2,user3='unNamed',user4='unNamed'] = str.split('-');
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
//배열 구조분해: 일부반환값 무시
var [user1, /*톰을 건너띔(아무것도 변수 설정을 하지않음.) */ , user2] = str.split('-');
// console.log(user1);
// console.log(user2);
//배열 구조분해: 바꿔치기 임시변수가 필요없는 장점이있다.
//객체 구조분해:
let user = {name:'Mike',age:'30'};
let {name, age} = user;
//순서도 상관이없이 변수선언이가능하다 , 키값이 등록이 되어있기 때문.
console.log(name); //Mike
console.log(age); //30
//키값 속성(property) 변경도 가능하다.
let {name:nameProperty, age:ageProperty} = user;
console.log(nameProperty);
console.log(ageProperty);
