let cPlane;
let dots = [];
function centerCanvas(canvas){
    if (window.innerWidth<window.innerHeight) resizeCanvas(window.innerWidth, window.innerWidth);
    else resizeCanvas(window.innerHeight, window.innerHeight);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}
function setup(){
    //createCanvas(window.innerWidth, window.innerHeight);
    var canvas = createCanvas(500, 500);
    centerCanvas(canvas);
    cPlane = new CoordinatePlane(width/2, height/2);
    //new Dot(width / 2, height / 2);
    for(let i = 0; i < DOT_LENGTH; i++){
        new Dot(random(width), random(height));
    }
}

function draw() {
    cPlane.show();
    dots.forEach(element => {
        element.show();
    });
}