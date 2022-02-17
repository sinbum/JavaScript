//Async 라는 것을 함수앞에 붙여주면 항상 Promise를 반환한다.

// function getName(){
//     return "Mike";
// }

// async function getName(){
//     //return "Mike";

//     //만약에 반환값이 promise라면
//     //return Promise.resolve('Tom');

//     //함수내부에서 에러가 발생하면 rejective를 반환
//     //return new Error('err...');
// }

// getName()
// .then((returnValue)=>{
//     console.log(returnValue);    
// })
// .catch((returnValue)=>{
//     console.log(returnValue)
// });


// function getData(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(data);
//         },100);
//     });
// }

// //await 
// //await 는 async내부에서만 사용가능 *일반함수에서 사용하면 에러가 발생.
// async function showName(){
//     const result = await getData("Mike"); //await 겟네임의 값을 기다렸다가 result에 넣어준다.
//     console.log(result);
// }

// showName();




//사용 예제--------------------------------------------------------------




const f1 = () =>{
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("1번 주문 완료");
        },1000);
    });
};

const f2 = (message) =>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            
            //실패했을경우.
            res("2번 주문 완료");
            //rej("xxx");
        },3000);
    });
};

const f3 = (message) =>{
    console.log(message);
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("3번 주문 완료");
        },2000);
    });
};


//Promise then을 쓰는것 보다 가독성이 좋다. 
//대부분은 async await 를 쓰는것을 선호하자.
async function order(){
        console.time('시작');

    // console.time('시작');
    // const result1 = await f1();  //1초
    // const result2 = await f2(result1);  //3초
    // const result3 = await f3(result2); //2초
    // console.log(result3);    
    // console.timeEnd('시작');
    // console.log('종료');

    //에러가 난경우 Promise는 .catch를 사용하지만
    //await은 .trycatch문으로 감싸주도록 한다.

    try {
    const result1 = await f1();  //1초
    const result2 = await f2(result1);  //3초
    const result3 = await f3(result2); //2초
    console.log(result3);    
    
} catch (error) {
    console.log('에러발생');
    console.log(error);  
}
    console.timeEnd('시작');

    console.log('종료');
}

//await 와 Promise.All을 사용해보기
async function order2(){

    try {
    const result = await Promise.all([f1(),f2(),f3()]);  //1초
    console.log(result);


    } catch (error) {
    console.log('에러발생');
    console.log(error);  
    }

    console.log('종료');
}

//order();

order2();
