// Display
// alert('Hello World');
// console.log("hello")
// console.error("You got a error")
// console.warn("It a warning")

// Variable - var, let, const
// const age=10;
// age = 20;
// console.log(age)

// Datatype - string, number, Boolean, null, undefined
// const name = 'Naveen';
// const age = 23;
// const rating = 4.9;
// const isMass = true;
// const x= null;
// const y= undefined;
// let z;
// console.log(typeof isMass)

// concatination
// const name = 'Naveen';
// const age = 23;
// console.log("My name is "+ name+" and my age is "+age);

// Another way of concatination
// const hello = `My name is ${name} and age is ${age}`;
// console.log(hello);

// Property & Methods
// const hello='Hello';
// console.log(hello.length);
// console.log(hello)
// console.log(hello.toUpperCase())
// console.log(hello.substring(0, 5).toUpperCase());
// console.log(hello.split(''))

// Array - Variable
const number = new Array(1,2,3,4,5);
console.log(number);

const fruits = ['name','add',12,true]; //Commenly used
console.log(fruits);
console.log(fruits[1]);
fruits[4] = 'New';
console.log(fruits);
fruits.push('pushnew');
console.log(fruits);
fruits.unshift('sdd');
console.log(fruits);
fruits.pop()
console.log(Array.isArray(fruits))