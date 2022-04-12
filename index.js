// this code import the generate function and generate 3 humans
import { generate } from "./modules/humans_generator.js";

for (let i = 0; i < 3; i++) {
  console.log(generate());
}
