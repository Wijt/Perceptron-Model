
let cPlane;
let dots = [];
let trainCount = 0;
let p;

function centerScaleCanvas(canvas){
    if (window.innerWidth<window.innerHeight) resizeCanvas(window.innerWidth, window.innerWidth);
    else resizeCanvas(window.innerHeight, window.innerHeight);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}
function setup(){
    //createCanvas(window.innerWidth, window.innerHeight);
    var canvas = createCanvas(500, 500);
    centerScaleCanvas(canvas);

    cPlane = new CoordinatePlane(width/2, height/2);

    for(let i = 0; i < DOT_LENGTH; i++){
        new Dot(random(width), random(height));
    }

    p = new Perceptron();
    /*for (let i = 0; i < 50; i++) {
        dots.forEach(dot => {
            p.train([dot.pos.x, dot.pos.y]);
            dot.label = p.fire([dot.pos.x, dot.pos.y]);
        });   
    }*/
}

function mouseReleased(){
    let dot = dots[trainCount++ % dots.length];
    p.train([dot.pos.x, dot.pos.y]);
    dot.label = p.fire([dot.pos.x, dot.pos.y]);
}

function draw() {
    cPlane.show();
    dots.forEach(element => {
        element.show();
    });
}