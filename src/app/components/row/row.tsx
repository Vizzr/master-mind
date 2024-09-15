import { Hint } from "@/app/models/hint";
import { Color } from "@/app/models/color";
import { ColorPinRow } from "../color-pin-row/color-pin-row";
import { HintPinRow } from "../hint-pint-row/hint-pin-row";
import { Checkmark } from "../icons/checkmark/checkmark";
import styles from "./row.module.css";

export interface RowProps {
    current: boolean;
    isValid: boolean;
    numberOfPins: number;
    hints?: Hint[];
    colors: Color[];
    draggedColor: Color | undefined;
    onColorSet?: (index: number, color: Color) => void;
    onGuess?: () => void;
}

export const Row: React.FC<RowProps> = (props: RowProps): React.ReactNode => {
    return (
        <div className={`${styles.row} ${props.current ? styles.current : ""}`}>
            <Checkmark
                showPlaceholder={!props.current || !props.isValid}
                onGuess={props.onGuess} />
            <ColorPinRow
                numberOfPins={props.numberOfPins}
                currentRow={props.current}
                colors={props.colors}
                draggedColor={props.draggedColor}
                onColorSet={props.onColorSet} />
            <HintPinRow
                numberOfPins={props.numberOfPins}
                hints={props.hints} />
        </div>
    );
};