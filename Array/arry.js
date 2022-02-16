//Arry 배열 강의
/*
Array
.push()     : 뒤에 삽입
.pop()      : 뒤에 삭제
.unshift()  : 앞에 삽입
arr.splice(n, m) : 특정 요소 n은 시작인덱스, m 은 개수
arr.splice(n, m, x) : x는 특정 요소를 지우고 추가
arr.splice(1, 3, 100, 200);
let arr = ["나는, "철수" , "입니다"];
arr.splice(1,0,"대한민국","소방관"); // 이렇게 1번자리에 0개를 삭제하고 추가하는 것도 가능함.
arr.splice() : 삭제된 요소를 반환함.
let arr = [1,2,3,4,5];
let result = arr.splice(1,2); >>> // [2,3]이 result로 반환됨. arr은 [1,4,5]가 됨.
arr.slice(n, m) : n부터 m인덱스 전까지 반환한다.
let arr = [1,2,3,4,5];
arr.slice(1,4); // [2,3,4]를 반환;
만약 arr.slice() 에 아무인자를 넣어주지 않을경우 배열이 복사된다.
let arr = [1,2];
arr.concat([3,4]) // 합쳐서 새로운 배열을 반환시킴.
arr.concat([3,4],5,6) //이렇게도 사용가능.
arr.indexOf / arr.lastIndexOf
let arr = [1,2,3,4,5,1,2,3];
arr.indexOf(3);     // 인덱스번호 2를 반환. 없으면 -1을 반환
arr.indexOf(3,3)    // 인덱스번호 7을 반환
arr.lastIndexOf(3)  // 인덱스번호 7을 반환
arr.includes() : 포함하는지만 확인 > 있으면 true 없으면 false
arr.find(fn) / arr.findIndex(fn)    // 첫번쨰 true 값만 반환하고 끝, 만약 없으면 undefined를 반환.
arr.filter(fn)                      // 조건을 만족하는 모든 요소를 배열로 반환.
arr.reverse() : 역순으로 재정렬. 1,2,3,4,5 >> 5,4,3,2,1 //게시판에서 최근에 조회된 목록조회 등을 반환할 때 사용.
arr.forEach(fn) : 배열반복.
        보통 forEach같은경우 fn 의 첫번째인자는 해당요소,두번쨰인자는 인덱스번호를 의미함.
        예)
        arr.forEach((item, index, arr) => {
            console.log(item) //요소
            console.log(index)//인덱스
        })
arr.map(fn) 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환.
            예시) 중요***** 실무에 자주 적용.
            let newUserList = userList.map((user, index) => {
                return Object.assign( 초기값{}, 복사할 객체 user, 추가할 키,밸류 {
                    id : index + 1,
                    isAdult : user.age > 19 ? true : false,
                });
            });
arr.join(); 배열을 스트링으로 반환
            결과값 >  // 1,2,3,4,5 or // 안녕,나는,철수야
            arry.join(" ") // 1 2 3 4 5 or // 안녕 나는 철수야
            arry.join("-") // 1-2-3-4-5 or // 안녕-나는-철수야
str.split(); 스트링을 배열로 반환
            str.split("") 결과값 > 한글자 한글자 를 배열의 하나에 담는다.
            str.split(',') ',' 를 기준으로 배열에 담는다. 이름같은경우 배열에 이름이 담겨있을때 등등 사용.
let arr     = [2,1,3,4,5];  arr.sort();     // [1,2,3,4,5];
let arr2    = [b,a,c,d,e];  arr2.sort();    // [a,b,c,d,e];
//Loadash 를 정말많이 사용한다. _.sortBy(arr); https://lodash.com
반복문으로 값을 일일히 더하는 것보다 훨씬 간편하게 사용할 수 있는 함수이다.
arr.reduce() 인수로 함수를 받는다. (누적계산값 prev, 현재값 cur, 초기값 []또는 0 ) => { return 계산값 }
//-------------------------------------------------------------------------------------------------------------------------------------------------------
//아래는 예재 사용 함수.
*/
let arr = [1,2,3,4,5,1,2,3];
// const result = arr.find(
//     (item) => {
//         return item % 2 === 0;
//     }
// );
//객체형이 요소로 배열에 담긴 경우.
// let userList = [
//     {name: "Mike", age: 30},
//     {name: "Jane", age: 27},
//     {name: "Tome", age: 10},
// ]
// console.log(userList.find(
//     (row) => {
//         return row.age < 11 ? true : false //true로 반환하는것은 find의 요소인 객체 자체를 반환함.
//     }
// ));
// console.log(userList.filter(
//     (row) => {
//         return row.age > 11 ? true : false //true로 반환하는것은 find의 요소인 객체 자체를 반환함.
//     }
// ));
// let newUserList = userList.map((user, index) => {
//     return Object.assign(/*초기값*/{},/*복사할 객체*/user,/*추가할 키,밸류 */{
//         id : index + 1,
//         isAdult : user.age > 19 ? true : false,
//     });
// });
// console.log(newUserList);
//console.log(userList.filter((row)=>{return row.name}));
// let tArr = [];
// userList.forEach((row)=>{
//     tArr.push(row.name);
// })
//console.log(tArr.join(' and ').trim().split(' and ').join());
// console.log(arr.reduce((prev,cur)=>{
//     return prev+cur;
// }))
//맵이나 필터를 사용하지않고 reduce()를 사용해서 배열을 반환해보기.
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Sue", age: 35},
    {name: "Harry", age: 26},
    {name: "Steve", age: 60},
    {name: "Choi", age: 10},
    {name: "Sean", age: 27},
];
//어린아이만 추출
const ChildList = userList.reduce((prev,cur) => {
    if (cur.age < 19){
        prev.push(cur.name);
    }
    return prev
}, []);
// console.log(ChildList);
//나이의 합을 추출
const totalAge = userList.reduce((prev,cur)=>{
    return prev =+ cur.age
}, /*초기값 0 */ 0);
//console.log(totalAge);
//이름의 길이가 3자이상인사람 추출
const nameLength = userList.reduce((prev,cur)=>{
    if(cur.name.length > 3){
        prev.push(cur.name);
    }
    return prev;
},[]);
console.log(nameLength);
