class Dot{
    constructor(x, y){
        this.pos = {x: x, y: y};
        this.label = x > y ? 1 : -1;
        dots.push(this);
    }
    
    show() {
        push();
            noStroke();
            if (this.label == 1){
                fill(DOT_ONE);
            }else{
                fill(DOT_TWO);
            }
            ellipse(this.pos.x, this.pos.y, DOT_R, DOT_R);
        pop();
    }
}