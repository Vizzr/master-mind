import { Hint } from "@/app/models/hint";
import { HintPin } from "../hint-pin/hint-pin";
import styles from "./hint-pin-row.module.css";

export interface HintPinRowProps {
    numberOfPins: number;
    hints?: Hint[];
}

export const HintPinRow: React.FC<HintPinRowProps> = (props: HintPinRowProps): React.ReactNode => {
    const firstRowPins: React.ReactNode[] = [];
    const secondRowPins: React.ReactNode[] = [];

    for (let i = 0; i < props.numberOfPins; i++) {
        const hint = props.hints?.at(i);
        const hintPin = (
            <HintPin
                key={`hintPin_${i}`}
                hint={hint} />);

        // Is even
        if (!(i & 1))
            firstRowPins.push(hintPin);
        else
            secondRowPins.push(hintPin);
    }

    return (
        <div className={styles.hintPins}>
            <div className={styles.row}>{firstRowPins}</div>
            <div className={styles.row}>{secondRowPins}</div>
        </div>
    );
};