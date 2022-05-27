// var instance = new Constructor();

// 어떤 생성자 함수(Contructor)를 new 연산자와 함께 호출하면
// Constructor에서 정의된 내용을 바탕으로 새로운 인스턴스가 생성된다.
// 이때 instance에는 __proto__ 라는 프로퍼티가 자동으로 부여된다.
// 이 프로퍼티는 Constructor의 prototype이라는 프로퍼티를 참조한다.
// Constructor.prototype
// ↓ new 
// instance.__proto__

var Person  = function(name) {
    this._name = name;
};

Person.prototype.getName = function() {
    return this._name;
};

var huehue = new Person('huehue');
console.log(huehue.__proto__.getName());    // undefinde

// 👀 어떤 함수를 메소드로써 호출할 때 메서드명 바로 앞의 객체가 곧 this가 된다. 👀
// getName 함수 내부에서 this는 huehue가 아니라 huehue.__proto__라는 객체이다.

console.log(Person.prototype === huehue.__proto__); // true

huehue.__proto__._name = 'huehue__proto__'; 
console.log(huehue.__proto__.getName());    // huehue__proto__


// __proto__는 생략 가능하다.
var hueka = new Person('hueka', 21);
console.log(hueka.getName()); // hueka.__proto__.getName();
var soobin = new Person('soobin', 23); 
console.log(soobin.getName()); // soobin.__proto__.getName();

huehue.__proto__.getName
// -> huehue(.__proto__).getName
//  -> huehue.getName