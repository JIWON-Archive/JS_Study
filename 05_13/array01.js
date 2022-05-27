// push는 파라미터로 넘겨준 값을 배열 긑에 요소로 추가
// pop은 파라미터 없이 해당 배열의 가장 끝에 있는 요소를 제거한다.

const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

numbers.pop();
console.log(numbers); // [ 1, 2, 3, 4, 5 ]