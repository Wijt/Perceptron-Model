class Separator {
    constructor(func, size, color) {
        this.func = func;
        this.first = {x: min.x, y: func(min.x)};
        this.second = {x: max.x, y: func(max.x)};
        this.color = color;
        this.size = size;
        separators.push(this);
    }

    show(){
        push();
            strokeWeight(this.size)
            stroke(this.color);
            line(this.first.x, this.first.y, this.second.x, this.second.y);
        pop();
    }
}