class CoordinatePlane{
    constructor(oX, oY){
        this.origin = {x: oX, y: oY};
    }
    
    show() {
        background(0)
        stroke(255);
        line(0, this.origin.y, width, this.origin.y); 
        line(this.origin.x, 0, this.origin.x, height);   
    }
}