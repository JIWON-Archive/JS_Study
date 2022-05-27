// node.js 실행 ctrl + alt + N

var foo = null;
// null type 확인
if(foo === null)
	console.log("null");

// 동적 타이핑

var foo1;
console.log(typeof foo1);

// 행 복사 shift  + alt + ↓↑
var foo1;
console.log(typeof foo1);

foo1 = {};
console.log(typeof foo1);

foo1 = true;
console.log(typeof foo1);

foo1 = 5;
console.log(typeof foo1);

foo1 = "string";
console.log(typeof foo1);

// 심볼(symbol) key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
var key = Symbol("key");
console.log(typeof key); // symbol

var obj = {};
obj[key] = '휴닝카이';
console.log(obj[key]); // 휴닝카이

// 변수 호이스팅
// 호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성
