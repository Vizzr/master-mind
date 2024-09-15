import { Color } from "@/app/models/color";
import { ColorPin } from "../color-pin/color-pin";
import styles from "./color-bar.module.css";
import React from "react";

export interface ColorBarProps {
    onDragColorStart: (color : Color) => void;
}

export const ColorBar: React.FC<ColorBarProps> = (props: ColorBarProps): React.ReactNode => {
    const availableColors = Object.values(Color)

    return (
        <div className={styles.colorPicker}>
            {availableColors.map((availableColor, index) =>
                <ColorPin
                    key={`color-picker-pin_${index}`}
                    color={availableColor}
                    onDragColorStart={props.onDragColorStart} />
            )}
        </div>
    );
}