// JavaScript is synchronous. 자바스크립트는 동기적
// Execute the code block in order after hoisting. 호이스팅 후 코드 블록을 순서대로 실행한다.
// hoisting : var, function declaration
// 호이스팅 : var 변수, 함수 선언들이 자동적으로 제일 위로 올라가는 것
// 1. 동기와 비동기
console.log('1'); // 출력 순서 (1)
// 비동기는 언제 코드가 실행될 지 예측할 수 없는 것
setTimeout(function(){ // 콜백함수를 인자로 전달 (1초 후 실행)
    console.log('2');   // 출력 순서 (4)
}, 1000);
// arrow function으로 간단하게 사용 가능
setTimeout(() => console.log('비동기'), 1000);  // 출력 순서 (5) 브라우저에 요청하고 동기코드 전부 출력 1초 후 출력
console.log('3');  // 출력 순서 (2)

/* 함수 선언 호이스팅 선언이 제일 위로 올라간다. */
// Synchronous callback 동기적인 콜백
function printImmediately(print) {
    print(); // 파라미터로 함수 받으면 함수처럼 사용되나?
}

// 함수의 인자로 화살표 함수 전달
printImmediately(() => console.log('huehue'));   // 출력 순서 (3)

// Asynchronous callback 비동기적인 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);  // 출력 순서 (6) 브라우저에 요청하고 동기코드 전부 출력 2초 후 출력