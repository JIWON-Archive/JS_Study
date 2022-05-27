// 객체 리터럴 방식과 Object 생성자 함수 방식으로 객체를 생성하는 것은 프로퍼티 값만 다른 여러 개의 객체를 생성할 때 불편하다.
// 생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log(this.name);
    };
}

// 인스턴스 생성
var person1 = new Person("Hue", "male");
var person2 = new Person("molrang", "female");

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();