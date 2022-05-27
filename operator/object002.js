// object 생성자 함수
// 빈 객체 생성
// 생성자 함수를 통해 생성된 객체를 인스턴스(instance)라 한다.
var person = new Object();

// 프로퍼티 추가
// 객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 해당 객체에 프로퍼티를 추가하고 값을 할당한다.
person.name = "Hue";
person.gender = "male";

person.sayHello = function() {
    console.log("Hi! " + this.name);
}

console.log(person.name);   // Hue
console.log(this.gender);   // undefined

console.log(person); // { name: 'Hue', gender: 'male', sayHello: [Function (anonymous)] }
person.sayHello(); // Hi! Hue
person.name = "Hueka"; // 이미 존재하는 프로퍼티 키에 새로운 값을 할당하면 프로퍼티 값은 할당한 값으로 변경된다.
person.sayHello(); // Hi! Hueka