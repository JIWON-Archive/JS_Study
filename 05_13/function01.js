// 함수 선언식 VS 함수 표현식
// 1. 함수 선언식
// function sayHi() {
//     console.log("하이");
// }

// 함수선언문은 함수 스코프를 가진다.
// 함수를 선언해도 함수 밖에서 호출된다.
// 함수안에 함수를 선언하면 에러가 발생한다.


function myFunction() {
    function sayHi() {
        console.log("함수 안에 함수 선언");
    }
    // sayHi(); // 함수 안에 함수 선언
}
myFunction();
sayHi();    // error

// 2. 함수 표현식
// 익명 함수를 값으로써 변수에 할당한 표현식

// let sayHello = function(){
//     console.log("헬로");
// }

// sayHello();

// 함수 표현식은 어떤 키워드로 선언한 변수에 할당하는지 따라 스코프가 달라진다.
// var  변수에 함수를 할당할 경우에는 함수 스코프를 가진다.
// let, const 변수에 함수를 할당할 경우에는 블록 스코프를 가진다.