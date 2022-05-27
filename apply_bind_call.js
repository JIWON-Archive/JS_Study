// [1] apply() 메서드
// 주어진 this 값과 배열로 제공되는 arguments로 함수를 호출한다.
// call() 구문과 유사하지만 차이점은 call()은 함수에 전달될 인수 리스트를 받는데 반해, 
// apply() 인수 단일 배열을 받는다.

const num = [1,3,5,7,9];
const max = Math.max.apply(null, num);
const min = Math.min.apply(null, num);
const random = Math.random.apply(null, num);

console.log(max);
console.log(min);
console.log(random);

// [2] bind()

// [3] call()