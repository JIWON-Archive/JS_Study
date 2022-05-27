// 함수 선언문은 호이스팅되서 함수를 선언하기 전에 호출할 수 있다.
sum(2,3);
// 6. Return a value
function sum(a,b) {
    return a + b;
}

const result = sum(1,2); // 3
console.log(`sum : ${sum(1,2)}`);

// First-calss function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a funcntion declaration can be called eariler than it is defined. (hoisted)
// 자바스크립트 엔진이 선언된 것을 제일 위로 올려준다.
// a function expression is created when the execution reaches it.
// print();    // 함수 표현식은 선언하기 전에 호출하면 에러가 남
const print = function() { // anonymous function
    console.log('print');
};
print();    
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using funtion experssion
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes!');
};
// named function
// better debugging in debbuger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); 프로그램이 죽으므로 필요할 때만 사용
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function 화살표 함수
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// }
const simplePrint = () => console.log('simplePrint!');
simplePrint();

const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
};

console.log(add(1,2));
console.log(simpleMultiply(2,2));