import { Color } from "./color";
import { Hint } from "./hint";

export class Guess {
    constructor(
        public colors: Color[],
        public hints: Hint[]
    ) { }
}