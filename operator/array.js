// 연관 배열
// 숫자로 된 인덱스 대신에 문자열로 된 키를 사용하는 배열
var arr = [];
arr["하나"] = 1;
arr["참"] = true;
arr["자바스크립트"] = "JavaScript";

console.log(arr["참"]); // 문자열을 인덱스로 배열 요소 추가
console.log(arr["자바스크립트"]);
console.log(arr["하나"]);

if(arr["참"]) {
    console.log("참입니다.")
}
