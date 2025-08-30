import { Composite } from "matter-js";

import { bigBang } from "./matter-helpers/bigBang"
import { createMouseAndConstraint } from "./matter-helpers/createMouseAndConstraint";
import { createBoundariesAndBall } from "./matter-helpers/createBoundariesAndBall";

const { engine, world, render, runner } = bigBang()

const { mouse, mouseConstraint } = createMouseAndConstraint(render, engine)
Composite.add(world, mouseConstraint);

const boundariesAndBall = createBoundariesAndBall(canvas.width, canvas.height);
Composite.add(world, boundariesAndBall);
