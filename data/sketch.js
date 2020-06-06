
let separators = [];

let cPlane;
let dots = [];
let trainCount = 0;
let p;

let min = {x: null, y: null}, max = {x: null, y: null};


function centerScaleCanvas(canvas){
    if (window.innerWidth<window.innerHeight) resizeCanvas(window.innerWidth, window.innerWidth);
    else resizeCanvas(window.innerHeight-50, window.innerHeight-50);
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

    new Separator(function(x) {return x;}, 2, "#F15025");
    new Separator(function (x) {
            return -p.weights[0]*x/p.weights[1];
        },2,"#2BA84A");
    
    /*for (let i = 0; i < 500000; i++) {
        nextDot();
    }*/
    /*for (let i = 0; i < 50; i++) {
        dots.forEach(dot => {
            p.train([dot.pos.x, dot.pos.y]);
            dot.label = p.fire([dot.pos.x, dot.pos.y]);
        });   
    }*/
}

function mouseReleased(){
    nextDot();
}

function nextDot(){
    let dot = dots[trainCount++ % dots.length];
    p.train([dot.pos.x, dot.pos.y]);
    separators.pop();
    new Separator(function (x) {
        return -p.weights[0]*x/p.weights[1];
    },2,"#2BA84A");
    dot.label = p.fire([dot.pos.x, dot.pos.y]);
}

function draw() {
    //frameRate(15)
    nextDot();
    translate(width/2,height/2);
    cPlane.show();
    dots.forEach(element => {
        element.show();
    });
    separators.forEach(element => {
        element.show();
    });
}