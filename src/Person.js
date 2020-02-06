export class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}

const person1 = new Person("Jansan");
person1.walk();
console.log(person1.name);