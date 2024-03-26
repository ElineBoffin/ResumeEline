function randomizeLetter() {
    document.querySelector('#letter text').innerHTML = 'e'; // Directly set the letter to 'e'
}

function randomizeShapes() {
    const SATURATION = '90%';
    let hue = getRandomHue();
    let shape0 = document.querySelector('#shape-0');
    let shape1 = document.querySelector('#shape-1');
    let shape2 = document.querySelector('#shape-2');
    // Set colours

    document.body.style.background = `hsl(${hue}, ${SATURATION}, 40%)`;
    shape0.setAttribute("fill", `hsl(${hue}, ${SATURATION}, 20%)`);
    shape1.setAttribute("fill", `hsl(${hue}, ${SATURATION}, 50%)`);
    shape2.setAttribute("fill", `hsl(${hue}, ${SATURATION}, 65%)`);
    // 	Set randomized shape points - random number of points from 5 to 100
    shape1.setAttribute("points", getPoints(getRandomInt(100, 5)));
    shape2.setAttribute("points", getPoints(getRandomInt(100, 5)));
}

// Get svg polygon points
function getPoints(numPoints) {
    let points = [];
    for (let i = 0; i < numPoints; i++) {
        let randomPoint = getRandomPoint();
        points.push(randomPoint);
    }
    return points.join(' ');
}

// Get a random number from 0 to 300 (width and height of letter svg)
function getRandomPoint(x, y) {
    let xCoord = getRandomInt(300);
    let yCoord = getRandomInt(300);
    return `${xCoord},${yCoord}`;
}

// Get a random number from 0 to 360
function getRandomHue() {
    return getRandomInt(200);
}

// Get a random integer from 0 to maxVal
function getRandomInt(maxVal, minVal = 0) {
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
}

function refresh() {
    randomizeLetter();
    randomizeShapes();
}

refresh();
window.addEventListener('click', refresh);