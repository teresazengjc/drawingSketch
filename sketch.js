var myCanvas;


function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.position(0, 0);
    //myCanvas.style('z-index', -1);
    //background(150, 100, 50);
}

function draw() {
    noStroke();
    fill(0);
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 10, 10);
    }
}

function windowResized() {
    
}
