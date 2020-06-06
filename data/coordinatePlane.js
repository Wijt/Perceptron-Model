class CoordinatePlane{
    constructor(oX, oY){
        this.origin = {x: oX, y: oY};
    }
    
    /*mapViaOrigin(pos){
        let x = map(pos.x, 0, width, width, -width/2, width/2);
        let y = map(pos.y, 0, height, height/2, -height/2);
        return {x: x, y:y};
    }*/

    show() {
        push();
            background(PLANE_BG);
            stroke(PLANE_LINE);
            strokeWeight(PLANE_WEIGHT);
            if(PLANE_STYLE == 0){
                line(0, this.origin.y, width, this.origin.y); 
                line(this.origin.x, 0, this.origin.x, height);
            }else if(PLANE_STYLE == 1){
                let w = width;
                let h = height;
                let wMid = int(w/2);
                let hMid = int(h/2);
                for (let i = wMid; i < w; i += PLANE_DASH_GAP){
                    let diff = i-wMid;
                    line(i, hMid-5, i, hMid+5);
                    line(wMid-diff, hMid-5, wMid-diff, hMid+5);
                }
                for (let i = hMid; i < h; i += PLANE_DASH_GAP){
                    let diff = i-hMid;
                    line(wMid-5, i, wMid+5, i); 
                    line(wMid-5, hMid-diff, wMid+5, hMid-diff); 
                }
            }
        pop();    
    }
}