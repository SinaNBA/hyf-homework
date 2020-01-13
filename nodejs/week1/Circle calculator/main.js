class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2
    }
    getCircumference() {
        return (this.radius * 3.14 * 2).toFixed(2)
    }
    getArea() {
        return (this.radius * this.radius * 3.14).toFixed(2)
    }
};
const circle = new Circle(10);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Diameter= ${circle.getDiameter()}  Circumference= ${circle.getCircumference()}  Area= ${circle.getArea()}`)
});

app.listen(8000, () => {
    console.log('server is ready on port 8000');

});