export class Hint {
    constructor(
        public correctPosition: boolean,
        public differentPosition: boolean
    ) {
        if (correctPosition && differentPosition)
            throw new Error("Hint cannot be both correct and different");

        if (!correctPosition && !differentPosition)
            throw new Error("Hint cannot be both incorrect and indifferent");
    }
}