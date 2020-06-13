
let separators = [];

let cPlane;
let dots = [];
let trainCount = 0;
let p;

let min = {x: null, y: null}, max = {x: null, y: null};


function centerScaleCanvas(canvas){
    let margin = 50;
    if (window.innerWidth < window.innerHeight) resizeCanvas(window.innerWidth, window.innerWidth);
    else resizeCanvas(window.innerHeight, window.innerHeight);
    resizeCanvas(width - margin, height - margin);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function setup(){
    //createCanvas(window.innerWidth, window.innerHeight);
    var canvas = createCanvas(500, 500);
    centerScaleCanvas(canvas);
    min.x = int(-width / 2);
    min.y = int(-height / 2);
    max.x = int(width / 2);
    max.y = int(height / 2);

    cPlane = new CoordinatePlane(0, 0);

    for(let i = 0; i < DOT_LENGTH; i++){
        new Dot(random(min.x, max.x), random(min.y, max.y));
    }

    p = new Perceptron();

    new Separator(function(x) { return 0.4*x-100; }, 2, "#F15025");
    new Separator(function (x) { return (-p.weights[2] - p.weights[0] * x) / p.weights[1]; }, 2, "#2BA84A");
    
    /*for (let i = 0; i < 5000000; i++) {
        nextDot();
    }*/
}

function mouseReleased(){
    nextDot();
}

function nextDot(){
    let dot = dots[trainCount++ % dots.length];
    p.train([dot.pos.x, dot.pos.y, 1]);
    separators.pop();
    new Separator(function (x) { return (-p.weights[2] - p.weights[0] * x) / p.weights[1]; },2,"#2BA84A");
    dot.label = p.fire([dot.pos.x, dot.pos.y, 1]);
}

function draw() {
    frameRate(180)
    //nextDot();  
    /*for (let i = 0; i < dots.length; i++) {
        nextDot();
    }*/
    translate(width/2,height/2);
    cPlane.show();
    dots.forEach(element => {
        element.show();
    });
    separators.forEach(element => {
        element.show();
    });
    push();
        fill(255);
        textStyle(BOLD);
        text("Me\t: x: 0, y: " + nf(separators[0].func(0),null,2).toString(), min.x+10, min.y+15);
        text("AI \t: x: 0, y: " + nf(separators[1].func(0),null,2).toString(), min.x+10, min.y+30);
    pop();
}