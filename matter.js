import { Runner } from "matter-js";
import { Render } from "matter-js";
import { Engine } from "matter-js";

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const engine = Engine.create();
const world = engine.world

const render = Render.create({
    canvas,
    engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
    },
});
Render.run(render);

const runner = Runner.create();
Runner.run(runner, engine);
