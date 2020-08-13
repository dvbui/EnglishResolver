
export class Circle {
    
    constructor(x, y, r, current_color, new_color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.current_color = current_color;
        this.new_color = new_color;
        this.vx = 0;
        this.vy = 0;
        this.v_color = [0, 0, 0];
        this.remain_time = 0;
    }

    on_click(new_x, new_y) {
        let number_of_ticks = 3000;
        this.vx = (new_x - this.x)/number_of_ticks;
        this.vy = (new_y - this.y)/number_of_ticks;
        for (let i=0; i<3; ++i) this.v_color[i] = (this.new_color[i] - this.current_color[i])/number_of_ticks;
        this.remain_time = 3000;
    }

    move(k) {
        k = Math.min(k, this.remain_time);
        this.x+=this.vx*k;
        this.y+=this.vy*k;
        for (let i=0; i<3; ++i) this.current_color[i]+=this.v_color[i]*k;
        this.remain_time-=k;
    }

    draw(ctx) {
        ctx.save();
            ctx.translate(this.x, this.y);
            ctx.strokeStyle = "black";
            ctx.fillStyle = `rgb(${this.current_color[0]}, 
                ${this.current_color[1]}, 
                ${this.current_color[2]})`;
            ctx.beginPath();
            ctx.arc(0, 0, this.r, 0, Math.PI*2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        ctx.restore();
        
    }
}