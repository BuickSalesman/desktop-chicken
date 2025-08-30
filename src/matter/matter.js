import { Composite } from "matter-js";
import { bigBang } from "./matter-helpers/bigBang"
import { createMouseAndConstraint } from "./matter-helpers/createMouseAndConstraint";

const { engine, world, render, runner } = bigBang()

const { mouse, mouseConstraint } = createMouseAndConstraint(render, engine)
Composite.add(world, mouseConstraint);
