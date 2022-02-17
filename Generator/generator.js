//Generator 변수.next(),변수.return(),변수.throw()
//함수의 실행을 중간에 멈췄다가 재개 할 수 있는 기능.

function* fn() {
    console.log(1);
    yield 1;        // 여기까지의 객체반환 a.next();
    console.log(2);
    yield 2;        // 여기까지의 객체반환 a.next();
    console.log(3);
    console.log(4);    
    yield 3;        // 여기까지의 객체반환 a.next();
    return "finish";
}

const a = fn();

a;

// console.log(a.next());  // 1 //yield 1 까지 함수코드를 수행하고 객체를 반환.


// console.log(a.next()); // 2 

// console.log(a.next()); // 3,4

// console.log(a.next()); //finish


//Generator_iterable
// Symbol.iterator 메서드가 있다.
// Symbol.iterator 는 iterator 를 반환해야 한다.

//iterator
// next 메서드를 가진다.
// next 메서드는 value 와 done 속성을 가진 객체를 반환한다.
// 작업이 끝나면 done은 true가 된다.

a[Symbol.iterator]() === a; //true 를 반환.
//즉 iterator가 Generator임을 알 수 있다.

function* fn2(){
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입려개훚세요";
    console.log(num2);
    
    return num1+num2;   

}

const b = fn2();

b.next();

b.next(1);

//console.log(b.next(3));



function* fn3(){
    let index = 0;
    while(true){
        yield index++;
    }
}

const c = fn3();



//또다른 사용예제
function* gen1(){
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";   
}

function* gen2(){
    yield "Hello,";
    yield* gen1();
    yield "!";    
}

console.log(...gen2()); //구조구문을 사용하면 done이 true가 될때 까지 값을 펼처줌.
//반복 가능한 모든객체가 올 수 있다.

//Redux Saga 에서 많이 쓰였다.


