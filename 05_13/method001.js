// 메서드는 어떤 객체가 가지고 있는 어떤 동작을 말한다.
// 자바스크립트에서 일반적으로 객체 안에 프로퍼티로 정의된 함수를 메서드라고 부른다.

// 1. 객체를 정의할때 프로퍼티 값으로 함수를 선언하는 방식
const Hue = {
    sayHi : function() {
        console.log("Hi");
    }
};
// 화살표 함수로 정의
const Hue1 = {
    sayHi : () => {
        console.log("하이");
    }
};
// key를 생략하고 function 키워드를 제외한 함수 선언문으로 메서드 만듬
const Hue2 = { 
    sayHi() {
        console.log("하이요");
    }
};


// 2. 객체를 정의하고 이후에 프로퍼티 추가

const Hue3 = {};
Hue3.sayHi = function(){
    console.log("Hueranghae❤");
};

const Hue4 = {};

Hue4.sayHi = () => {
    console.log("huehue!");
}

// 메서드 호출
Hue3.sayHi();
Hue4.sayHi();

Hue1["sayHi"](); 
Hue2['sayHi']();