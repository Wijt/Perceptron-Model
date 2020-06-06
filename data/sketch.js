let cPlane;
function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    cPlane = new CoordinatePlane(width/2, height/2);
}

function draw() {
    cPlane.show();

}