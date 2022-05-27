// 백틱(``)의 기능
// 1. `` 줄바꿈 개행
// 2. 표현식 삽입 ${}의 결과는 문자열로 자동 변환된다.
for(var i = 1; i <= 6; i++) { // 1,2,3,4,5
    for(var j = 1; j <=6; j++) { // 1,2,3,4,5
        if(i + j === 6) console.log(`[${i}, ${j}]`);
    }
}

var name = "휴닝카이";
var height = "183";

console.log(`${name}의 키는 ${height}입니다.`);