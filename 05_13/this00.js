// this키워드를 사용하면 그 함수를 호출한 주체(객체)를 가리키게 된다.
// 누가 이 함수를 불렀느냐
const myObejct = {
    printThis : function() {
        console.log(this);
        // 메서드로 실행된 함수의 this는 해당 함수를 호출한 주체, 즉 myObject 객체
    }
}

function printThis() {
    console.log(this);
}

myObejct.printThis(); // { printThis: [Function: printThis] }
printThis(); // Object [global] window 객체