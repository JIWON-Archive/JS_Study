// function (sub-program)
// 프로그램 안에서 각각의 작은 단위의 기능들을 수행하는 것
// function은 input(parameters)을 받아서 output(return)을 하는 것
// 우리는 function을 쓸 때 또는 api를 쓸때 이 함수는 이런 일을 하겠구나 생각할 수 있다.

// 1. Function declaration
function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Hello@');
log(1234); // 숫자를 문자열로 변환해서 출력 -> 명확하게 하고 싶다면 type script 사용


// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {  // 객체를 파라미터로 받아서
    obj.name = 'coder'; // 객체의 name 변경
}

const huehue = { name : 'huehue' };
changeName(huehue);
console.log(huehue);

// 5. Local scope 
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// 중첩된 함수에서 자식의 함수가 부모의 함수에 정의된 변수에 접근 가능 클로저?
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {   // 함수안에 함수 선언
        console.log(message);   // 자식의 부모의 변수를 확인할 수 있다.
        let childMessage = 'hello';
    }
    // console.log(childMessage); // 자식의 변수를 부모에서 보려고 하면 에러
}

printMessage();
// console.log(message); // 지역변수는 블럭 안에서만 사용가능