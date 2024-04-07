const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw : function () {
        //console.log("draw");
    }
}

circle.draw();

//factory function
function createCircle (radius) {
    return {
        radius,
        draw : function () {
            console.log("draw");
        }
    }
}

const create = createCircle(1)


//constructor function 
function Circle (radius) {
        this.radius = radius;
        this.draw = function () {
            //console.log("draw");
        };
}

const circle1 = new Circle (1)

for (let key in circle1) {
    if (typeof circle[key] !== "function")
    console.log(key, circle[key]) 
}

circle1.location = {
    x:1,
}

delete circle1.location



//every function in Javascript is an object

//difference between reference types and primitive types
let x = 10;
let y = x;

x=20;


//primitives are copid by their value 
//Objects are copied by their reference
//reference types are stored in memory as a reference value
let p = {value: 30}
let t = p;


let number = 10;

function increase (number) {
    number++;
}

increase(number);
//console.log(number);


let obj = {value: 10};

function increase (obj) {
    obj.value++;
}

increase(obj);
//console.log(obj);

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Creating objects using the constructor function
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Using the method inherited from the prototype
person1.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I'm 25 years old.
