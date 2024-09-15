import { Color } from "./color"
import { isArrayUnique, shuffleArray } from "./functions";
import { Guess } from "./guess";
import { Hint } from "./hint";

export class Calculator {

    constructor(
        public numberOfPins: number,
        public allowDuplicates: boolean,
        public allowEmpties: boolean
    ) { }

    public generateSolution = () => {
        const solution: Color[] = [];

        let colors = this.getAvailableColors();

        for (let i = 0; i < this.numberOfPins; i++) {
            const randomColor = Calculator.getRandomColor(colors);

            // Remove available colors to ensure that duplicates are not in the result
            if (!this.allowDuplicates) {
                colors = colors.filter(color => color !== randomColor);
            }

            solution.push(randomColor);
        }

        return solution;
    }

    public isValidGuess = (currentGuess: Color[]): boolean => {
        if (currentGuess.length !== this.numberOfPins)
            return false;

        if (!this.allowDuplicates && !isArrayUnique(currentGuess))
            return false;

        if (!this.allowEmpties && currentGuess.indexOf(Color.None) > -1)
            return false;

        return true;
    }

    public guess = (solution: Color[], guess: Color[]): Guess => {
        const hints: Hint[] = [];

        guess.forEach((guessColor, guessIndex) => {
            const foundColorIndex = solution.findIndex((solutionColor) => solutionColor === guessColor);

            if (foundColorIndex === -1)
                return;

            const samePosition = foundColorIndex === guessIndex;
            hints.push(new Hint(samePosition, !samePosition));
        });
        
        // Array has to be shuffled to ensure that hints are random
        shuffleArray(hints);

        return new Guess(guess, hints);
    }

    public getAvailableColors = (): Color[] => {
        let colors = Object.values(Color);

        if (!this.allowEmpties) {
            const indexOfNone = colors.indexOf(Color.None);
            colors.splice(indexOfNone, 1);
        }

        return colors;
    }

    private static getRandomColor = (colors: Color[]) => {
        const randomNumber = Math.floor(Math.random() * colors.length);

        return colors[randomNumber];
    }
}