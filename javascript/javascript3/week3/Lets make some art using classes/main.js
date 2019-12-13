var c = document.getElementById("myCanvas");

class circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        let ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }

    drawRandom() {
        let ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.arc(getRandomInt(50, 200), getRandomInt(50, 200), getRandomInt(10, 40), this.startAngle, this.endAngle);
        ctx.stroke();
        ctx.fillStyle = getRandomColor();
        ctx.fill();
    }
};

const c1 = new circle(50, 50, 20, 0, 2 * Math.PI, '#000000');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

//What if we wanted the canvas to have the same width and height of the screen?
//Just write the following codes : 
//c.width=window.innerWidth; 
//c.height=window.innerHeight;