class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : hello!`)
        // this는 생성된 object.name
    }
}

const hueka = new Person('hueka', 21);
console.log(hueka.name);
console.log(hueka.age);
hueka.speak();