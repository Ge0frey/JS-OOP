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

const another = new Circle (1)

//every function in Javascript is an object

//difference between reference types and primitive types
let x = 10;
let y = x;

x=20;

//reference types are stored in memory as a reference value
let p = {value: 30}
let t = p;


