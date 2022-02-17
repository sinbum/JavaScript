//call
//call 메서드는 모든 함수에서 사용할 수 있고, this를 특정값으로 지정할 수 있다

const mike = {
    name: "Mike",
};

const tom = {
    name : "Tom",
}

// function showThisName() {
//     console.log(this.name);
// }


// showThisName();
// showThisName.call(mike);
// showThisName.call(tom);


//사용예제-----------------------------------------------------------------------------
function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}
//update.call(tom, 1991, 'singer');

//console.log(tom);



//apply 
//apply는 방식은 동일하나 매개변수를 배열로 받는다.

// update.apply(tom,[1991,'singer']);
// console.log(tom);

//사용예제-----------------------------------------------------------------------------
const nums = [3,10,1,6,4];
const minNum = Math.min(nums);
const maxNum = Math.max(nums);

// console.log(minNum); //NaN
// console.log(maxNum); //NaN

const minNum2 = Math.min(...nums); //스프레드 연산자
const maxNum2 = Math.max(...nums); //스프레드 연산자

// console.log(minNum2); // 1
// console.log(maxNum2); // 10


//const minNum3 = Math.min.apply(null, [3,10,1,6,4]])
const minNum3 = Math.min.apply(null, nums); //(this: Function, thisArg: any, argArray?: any) 

//const maxNum3 = Math.max.call(null, 3,10,1,6,4); //매개변수를 차례대로 받음.
const maxNum3 = Math.max.call(null, ...nums);

// call과 apply는 적용방식이 같지만 매개변수를 받는다는 점에서 배열과, 나열된 인자값을 여러개 받는 방식에서의 차이가 있다.

// console.log(minNum3); // 1
// console.log(maxNum3); // 10



//사용예제-----------------------------------------------------------------------------
const updateMike = update.bind(mike); //함수의 this값을 영구히 바꿀 수 있다.
updateMike(1980, "police");
//console.log(mike);

const updateTom = update.bind(tom);
updateTom(1991, "developer");
//console.log(tom);




//실제 사용 예제 -----------------------------------------------------------------------------

const user ={
    name: "Mike",
    showName : function () {
        console.log(`hello, ${this.name}`);
    },
};

//user.showName();

let fn = user.showName;

//fn.call(user);
//fn.apply(user);

let boundFn = fn.bind(user);
boundFn();
