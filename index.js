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
            console.log("draw");
        };
}

const circle1 = new Circle (1)

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
console.log(number);


let obj = {value: 10};

function increase (obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

