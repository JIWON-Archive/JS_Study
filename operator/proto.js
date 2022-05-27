// 기계 : 부모
function 기계() {
    this.q = "strike";
    this.w = "snowball";
}
// 프로토타입은 유전자
// prototype에 추가하면 자식들이 사용가능
기계.prototype.name = "kim"; // 부모에만 추가
// nunu : 자식
var nunu = new 기계();

console.log(typeof 기계);  
// 부모 유전자에 있는 걸 자식이 사용할 수 있는 이유
// nunu가 name을 가지고 있지 않으면 nunu 부모 뒤짐
console.log(nunu.name); // kim

/* 프로토타입 체인 
<object에서 자료 뽑을떄 일어나는일>
1. 직접 자료를 가지고 있으면 그거 출력
2. 없으면 부모 유전자 뒤짐
3. 없으면 부모의 부모 유전자까지

*/