import { Circle } from "./Circle.js";
import { Name } from "./Name.js";

function main() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const circle_radius = 25;
    const circle_padding = 2;
    const number_of_contestants = 15;
    const number_of_problems = 15;
    let elem = [];

    for (let i=0; i<number_of_contestants; i++) {
        for (let j=0; j<number_of_problems; j++) 
            elem.push(new Circle((j*2+1)*circle_radius, (i*2+1)*circle_radius, circle_radius-1, [255, 255, 255], [255, 0, 0]));
        elem.push(new Name((number_of_problems*2+1)*circle_radius, (i*2+1)*circle_radius, "Hello World"));
    }

    let sqr = x => x*x;
    let distance_square = (x1, y1, x2, y2) => sqr(x1-x2) + sqr(y1-y2);

    canvas.addEventListener('mousedown', (event) => {
        let x = event.pageX - canvas.offsetLeft;
        let y = event.pageY - canvas.offsetTop;
        console.log(x, y);
        elem.forEach( circ => {
            if (!(circ instanceof Circle)) return;
            //console.log(x,y,circ.x,circ.y, distance_square(x,y,circ.x,circ.y), sqr(circ.r));
            if (distance_square(x,y,circ.x,circ.y)<=sqr(circ.r)) {
                circ.on_click(circ.x, circ.y);
            }        
        });
    });

    function clearScreen(ctx) {
        ctx.save();
            ctx.fillStyle = "white";
            ctx.fillRect(0,0,1200,800);
        ctx.restore();
    }

    let lastTime = new Date();
    function animation() {
        let currentTime = new Date();
        let diffTime = currentTime - lastTime;
        lastTime = currentTime;
        clearScreen(ctx);
        elem.forEach( (x) => {
            x.move(diffTime);
            x.draw(ctx);
        });
        window.requestAnimationFrame(animation);
    }

    animation();
}

window.onload = main;