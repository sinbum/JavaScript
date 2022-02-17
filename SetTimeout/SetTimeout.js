//setTimeout


//setTimeout(fn, time);

//(예제 코드)3초뒤 실행
// setTimeout(()=>{
//     console.log('3');
// },3000);

//인수값을 넣은 함수를 setTimeout에 넣어 실행하고싶다면.
let num=0;

function showMessage(str){

    num++;
    if(num<5 || num % 5 === 0){
        console.log(num + '초가 지났습니다.');
    }

    return num;
}

//setTimeout(showDate,3000,'19910215');



//setInterval : 함수사용법은 동일하나 반복적으로 실행한다.


setInterval(showMessage,1000,'프로그램을 시작합니다');
