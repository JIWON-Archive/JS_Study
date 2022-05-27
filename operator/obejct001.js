// 객체 생성
// 객체 리터럴 - 가장 일반적인 객체 생성 방식
var emptyObject = {};
console.log(typeof emptyObject); // object

// 프로퍼티가 추가된 객체 생성
var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
      console.log('Hi! My name is ' + this.name);
    }
  };
  
  console.log(typeof person); // object
  console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}
  
  person.sayHello(); // Hi! My name is Lee