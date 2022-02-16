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
