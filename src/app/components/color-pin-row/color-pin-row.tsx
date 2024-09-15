import { Color } from "@/app/models/color";
import { ColorPin } from "../color-pin/color-pin";
import styles from "./color-pin-row.module.css";

export interface ColorPinRowProps {
    numberOfPins: number;
    currentRow: boolean;
    colors: Color[];
    draggedColor: Color | undefined;
    onColorSet?: (index: number, color: Color) => void;
}

export const ColorPinRow: React.FC<ColorPinRowProps> = (props: ColorPinRowProps): React.ReactNode => {
    const pins: React.ReactNode[] = [];

    for (let i = 0; i < props.numberOfPins; i++) {
        let color = props.colors.at(i);

        if (color === undefined)
            color = Color.None;

        pins.push(
            <ColorPin
                key={`colorPin_${i}`}
                color={color}
                disabled={!props.currentRow}
                onDragColorEnd={() => props.onColorSet && props.draggedColor ? props.onColorSet(i, props.draggedColor) : undefined} />
        );
    }

    return (
        <div className={styles.colorPins}>
            {pins}
        </div>
    );
};