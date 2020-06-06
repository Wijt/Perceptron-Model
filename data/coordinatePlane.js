class CoordinatePlane{
    constructor(oX, oY){
        this.origin = {x: oX, y: oY};
    }

    show() {
        push();
            background(PLANE_BG);
            stroke(PLANE_LINE);
            strokeWeight(PLANE_WEIGHT);
            if(PLANE_STYLE == 0 || PLANE_STYLE == 2){
                line(min.x, this.origin.y, max.x, this.origin.y); 
                line(this.origin.x, min.y, this.origin.x, max.y);
            }
            if(PLANE_STYLE == 1 || PLANE_STYLE == 2){

                for (let i = this.origin.x; i < max.x; i += PLANE_DASH_GAP){
                    line(i, -5, i, 5);
                    line(-i, -5, -i, 5);
                }
                for (let i = this.origin.y; i < max.y; i += PLANE_DASH_GAP){
                    line(-5, i, 5, i);
                    line(-5, -i, 5, -i);
                }

            }
        pop();    
    }
}         

/* for canvas origin 0 0
let w = max.x;
let h = max.y;
let wMid = int(w/2);
let hMid = int(h/2);
for (let i = wMid; i < w; i += PLANE_DASH_GAP){
    let diff = i-wMid;
    line(i, hMid-5, i, hMid+5);
    line(wMid-diff, hMid - 5, wMid-diff, hMid + 5);
}
for (let i = hMid; i < h; i += PLANE_DASH_GAP){
    let diff = i-hMid;
    line(wMid-5, i, wMid+5, i); 
    line(wMid-5, hMid-diff, wMid+5, hMid-diff); 
}
*/