export class Name {
    
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.vx = 0;
        this.vy = 0;
        this.remain_time = 0;
    }

    on_click(new_x, new_y) {
        number_of_ticks = 3000;
        this.vx = (new_x - this.x)/number_of_ticks;
        this.vy = (new_y-this.y)/number_of_ticks;
    }

    move(k) {
        k = Math.min(k, this.remain_time);
        this.x+=this.vx*k;
        this.y+=this.vy*k;

        this.remain_time-=k;
    }

    draw(ctx) {
        ctx.save();
            ctx.translate(this.x, this.y);
            ctx.font = "50px Arial";
            ctx.fillText("Hello World", 0, 15);
        ctx.restore();
    }
}