const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];
const targets = document.querySelectorAll('ul.targets li');

function translateOneByOne() {
    moveElement(boxes[0], {
            x: 20,
            y: 300
        })
        .then(() => {
            console.log("redBox has been moved");
            return moveElement(boxes[1], {
                x: 400,
                y: 300
            });
        })
        .then(() => {
            console.log("blueBox has been moved");
            return moveElement(boxes[2], {
                x: 400,
                y: 20
            });
        })
        .then(() => {
            console.log("greenBox has been moved");
        })
};

translateOneByOne();

function translateAllAtOnce() {
    Promise.all([moveElement(boxes[0], {
            x: 20,
            y: 300
        }), moveElement(boxes[1], {
            x: 400,
            y: 300
        }), moveElement(boxes[2], {
            x: 400,
            y: 20
        })])
        .then(() => {
            console.log("All the Boxes has been moved");
        })
};
//translateAllAtOnce();

setTimeout(() => {
    location.reload();
}, 8000)