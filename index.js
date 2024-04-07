const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw : function () {
        console.log("draw");
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

console.log(createCircle(1).draw());