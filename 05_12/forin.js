
var obj = {
    name : "휴닝카이",
    job : "singer",
    age : 21,
    nickname : "KIB"
}
/*

for(변수 in 객체) {
    // 객체의 모든 열거할 수 있는 프로퍼티의 개수 만큼 반복적으로 실행하고자 하는 실행문
}

*/
for(var txt in obj) {
    // 객체의 모든 열거할 수 있는 프로퍼티의 개수 만큼 반복적으로 실행하고자 하는 실행문
    console.log(txt, obj[txt]);
}
/*

name 휴닝카이
job singer
age 21
nickname KIB

*/

