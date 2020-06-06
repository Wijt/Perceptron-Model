
let cPlane;
let dots = [];
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
    console.log(p.fire([-1, 0.5]));
}

function draw() {
    cPlane.show();
    dots.forEach(element => {
        element.show();
    });
}