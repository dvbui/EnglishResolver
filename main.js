function main() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const circle_radius = 25;
    const circle_padding = 2;
    for (i=0; i<15; i++) {
        ctx.save();
            ctx.translate(0, i*2*circle_radius + circle_radius);
            for (j=0; j<15; j++) {
                ctx.save();
                ctx.translate(j*2*circle_radius + circle_radius, 0);
                ctx.moveTo(circle_radius, 0);
                ctx.beginPath();
                ctx.arc(0, 0, circle_radius - circle_padding, 0, Math.PI*2);
                ctx.stroke();
                ctx.restore();
            }
            
            ctx.save();
            ctx.translate(15*2*circle_radius + circle_radius, 0);
            ctx.font = "50px Arial";
            ctx.fillText("Hello World", 0, 15);
            ctx.restore();
        
        ctx.restore();
    }

}

window.onload = main;