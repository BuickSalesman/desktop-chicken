const { Mouse, MouseConstraint } = require("matter-js");

export const createMouseAndConstraint = (render, engine) => {
    const mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                render: {
                    visible: true,
                },
            },
        });

    return { mouse, mouseConstraint }
}

