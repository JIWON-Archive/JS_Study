// ctrl + x : 행삭제
// 선대입 후증가
var x = 5, result;
result = x++;
console.log(result, x); // 5, 6

var y,z;
y = z = 10; // 연쇄할당
console.log(y,z); // 10 10

// 동등 비교 연산자는 수많은 부작용을 일으키므로 == 사용하지 않는다.
// === 일치 비교 연산자 사용 !== 불일치 비교

// NaN은 자신과 일치하지 않는 유일한 값이다.
if(NaN === NaN) {
    console.log("true");
} else {
    console.log("false");
}

// 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다
if(isNaN(NaN)) {
    console.log("true");
} else {
    console.log("false");
}
