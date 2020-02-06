/*
====== Let / Const =====
====== Objects =====

====== this =====
====== Arrow Funcs =====

====== Destructuring =====
====== Spread =====

====== Classes =====
====== Modules =====
*/

// ====== Var / Let / Const ===== //
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
console.log("sayHello");
sayHello();

// var -> function
// let -> block
// const -> block

function sayHi() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
console.log("Say Hi")
sayHi();

// const read-only
const x = 10;
console.log(x);

// ====== Objects ===== //
const person = {
    name: "Jansan",
    walk: function () { },
    talk() { }
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'Vino';
console.log(person.name);

// ====== The this Keyword ===== //
const company = {
    name: 'Mpjwebsign',
    work() {
        console.log(this);
    }
};

company.work();

// ====== Binding this ===== //
const employe = {
    name: 'Niklas',
    job() {
        console.log(this);
    }
};

employe.job();

const job = employe.job.bind(employe);
job();


// ====== Arrow Function ===== //

const square = function (number) {
    return number * number;
}

console.log(square(10));

const mySquare = number => number * number;
console.log(mySquare(20));

const myArrowFun = () => "Hello Arrow Function";
console.log(myArrowFun);

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
];
const activeJobs = jobs.filter(function (job) { return job.isActive });
console.log(activeJobs);

const activejob = jobs.filter(job => job.isActive);
console.log(activejob);

// ====== Arrow Function and this ===== //

const myPerson = {
    talk() {
        var self = this;
        setTimeout(function () {
            console.log("self", self);
        }, 1000);
    }
}
console.log(myPerson.talk());

const ourPerson = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};

ourPerson.talk();

// ====== Array.map() ===== //
// Method 1
const colors = ['red', 'green', 'blue'];

const items = colors.map(function (color) {
    return '<li>' + color + '</li>';
})
console.log(items);

// Method 3

const ourColors = ['black', 'orange', 'yellow'];

const ourColor = ourColors.map(color => '<li>' + color + '</li>');
console.log(ourColor);

// Method 3
const myColors = ['lightblue', 'brown', 'peple'];

//Template literals in ES6
const myColor = myColors.map(color => `<li>${color}</li>`);
console.log(myColor);

// ====== Object Destructuring ===== //
const address = {
    street: '',
    city: '',
    country: ''
};

//const street = address.street;
//const city = address.city;
//const country = address.country;

const { street, city, country } = address;
console.log(street, city, country);

const { street: st } = address;
console.log(st);

// ====== Spread Operator Array===== //
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const myFirst = [7, 8, 9];
const mySecond = [10, 11, 12];
const myCombined = [...myFirst, 'a', ...mySecond, 'b'];
console.log(myCombined);


const clone = [...myFirst];
console.log(clone);
console.log(myFirst);

// ====== Spread Operator Object===== //
const obFirst = { name: 'Jansan' };
const obSecond = { job: 'loader' };

const objCombined = { ...obFirst, obSecond, location: 'Sweden' };
console.log(objCombined);

const objClone = { ...obFirst };
console.log(objCombined);

// ====== Classes ===== //

class Person {
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

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher('Vino', 'programing');
teacher.teach();


// ====== Modules ===== //

// Create seprad file name Person.js and Teacher.js
// export class Person { }
// export class Teacher { }
// (import Person class in Teacher) import { Person } from './Person';

// (import Teacher class) import { Teacher } from './Teacher';
// (import promote function) import { promote } from './promote'

// const teacher = new Teacher('Vino', 'programing');
// teacher.teach();

// export default class Teacher extends Person {
// import Teacher from './Teacher';

// Default -> import ... from '';
// Named -> import { ... } from '';

// export default function promote() { }
// import Teacher, {promote} from './teacher';
// import React, {Component} from 'react';

