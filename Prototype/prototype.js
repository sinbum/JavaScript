//Prototype

const car = {
    wheels: 4,
    drive() {
        console.log(`${this.name} drive..`);
    },
};

const bmw = {
    color : "red",
    navigation : 1,
};

const benz = {
    color : "black",
}

const audi = {
    color : "blue",
};

 bmw.__proto__ = car; //car를 상속
// benz.__proto__ = car;
// audi.__proto__ = car;

//console.log(bmw.wheels); // bmw의 wheels가 없는데 어떻게 인식? __proto__에서 객체를 찾는다. >> 그것은 car에게서 상속 받았기 떄문.


//PrototypeChain
//상속은 지속적으로 이루어 질수 있다.

const x5 = {
    color: "white",
    name: "x5",
};

x5.__proto__ = bmw;

//x5.drive()


//for in을 이용해서 객체 프로퍼티를 순회해본다.
// for (property in x5){
//     // console.log(property);

//     //x5 객체가 __proto__ 에서 직접 가지고 있는지 아닌지의 여부 확인은 hasOwnProperty를 사용.
//     if(x5.hasOwnProperty(property)){
//         console.log('o', property)
//     }else{
//         console.log('x', property)
//     }
// }



//생성자 함수를 이용해서 사용 케이스


const Bmw = function (color){
    this.color = color;   
};

const x4 = new Bmw("red");
const z4 = new Bmw("blue");


// 아래와 같은 코드를 사용해도 되지만 더 간편하게 사용할 수있다.
// x4.__proto__ = car;
// z4.__proto__ = car;
//console.log(x4.wheels)

//위의 수정예제.
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function (){
    console.log("drive.. ");
};


//프로토타입을 이용하면 중복 코드를 줄일 수있다. 
//  >> 생성자 함수로 만들어진 객체에 일일히 작업을 할 필요가 없는것.

//console.log(x4.wheels)





//instanceof
//인스턴스오브를 이용해서 객체와 생성자를 비교할 수있다.
// 해당객체가 생성자로 만들어진 것인지 확인해서 true or false를 반환한다.
//console.log(x4 instanceof Bmw); 
//console.log(x4.constructor === Bmw);


//클로져를 이용해 은닉화 가능
const Benz = function (color){
    const c = color;
    this.getColor = function (){
        console.log(c);        
    };
};

const CclassRed = new Benz("red");
CclassRed.getColor();




