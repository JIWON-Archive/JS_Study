// Object one of the JavaScript's data types.
// a collection of related data
// and/or functionality. 
// Nearly all object in JavaScript are instance of Object.
// object = {key : value}


/*
const name = 'hueka';
const age = '21';
print(name, age);

function print(name, age) {
    console.log(name);

    console.log(age);
}
*/

// literals & properties
// 객체 생성
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);

    console.log(person.age);
}

const hueka = { 
    name: 'hueka',
    age : 21
}
print(hueka);

// 프로퍼티 추가
// 생각지도 못한 에러가 발생할 수 있어 유지 보수 할 때 안좋다.
hueka.hasJob = true;
console.log(hueka.hasJob);

// 삭제
delete hueka.hasJob;
console.log(hueka.hasJob);  // undefined

// 2. Computed properties 개선된 프로퍼티
// key should be always string
// 2-1 .은 코딩하는 순간 필요한 그 키에 해당하는 값을 받아오고 싶을 때
// 2-2 ['string']은 정확하게 어떤 키가 필요한 지 모를 때 runtime에 결정될 때
// 실시간으로 원하는 키의 값을 받아오고 싶을 때
console.log(hueka.name);
console.log(hueka['name']); // 키 string type으로 접근
hueka['hasJob'] = true;
console.log(hueka.hasJob); 

// obj, key를 받아서 obj의 key에 상응하는 value를 출력하는 함수
// 그래서 어떤 키를 받을 지 모른다.
// 사용자에게 input을 받아서 출력하는 함수
function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}

printValue(hueka, 'name'); // key는 항상 string 타입으로 전달
printValue(hueka, 'age');

// 3. Property value shorthand
const person1 = { name: 'kai', age: 21 };
const person2 = { name: 'kamal', age: 21 };
const person3 = { name: 'huehue', age: 2 };
// ❗오브젝트를 필요할 때 마다 일일히 만들어야하는 문제점이 있었다.
// 동일한 키와 밸류 반복 작성하게 되는 문제점
// 👀함수를 이용해서 값만 전달해주면 오브젝트를 만든다.
const person4 = Person1('Ongsimmy', 3);
const person5 = new Person2('KIB', 21);

console.log(person4);
console.log(person5);
// 다른 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수는 대문자로 시작하도록 만든다.
function Person1(name, age) {
    return {
        // name : name,    // 자바스크립트는 프로퍼티 밸류 숏이라는 기능이 있어서
        // age : age,      // 키와 밸류의 이름이 동일하다면 이것을 생략할 수 있다.
        name,              // 이렇게 해도 오브젝트 생성 가능
        age,
    };
}

// 4. Constructor function
function Person2(name, age) {
    // return을 작성하지 않고 클래스 생성자 처럼 작성
    // 여기서 생략된 것은 우리가 새로운 오브젝트를 만들어서 this에
    // name이라는 새로운 프로퍼티를 넣고 결국은 this를 return하는 함수
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator : property existence check (key in obj)
// 객체 안의 키 확인
console.log('name' in hueka);
console.log('age' in hueka);
console.log('random' in hueka);
console.log(hueka.random); // undefined

// 6. for..in vs for..of
// for(key in obj) 객체의 모든 키를 꺼내옴
for(key in hueka) {
    console.log(key);
}

// for(value of iterable)
const array = [1,2,4,5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for(value of array) { // arrary에 있는 값들이 value에 할당 되면서 블럭안에서 순차적으로 출력
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {
    name : 'huehue', age : '21'
};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}

console.log(user3);


const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user4);

 // another example
 const fruit1 = { color : 'rad'}
 const fruit2 = { color : 'blue', size: 'big'}
 const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 값이 앞의 동일한 프로퍼티에 덮어 쓰워진다.
 console.log(mixed.color);
 console.log(mixed.size);