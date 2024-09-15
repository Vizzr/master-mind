import { Color } from "@/app/models/color";
import "./color-pin.css";

export interface ColorPinProps {
  color: Color;
  disabled?: boolean;
  onDragColorStart?: (color: Color) => void;
  onDragColorEnd?: (color: Color) => void;
}

export const ColorPin: React.FC<ColorPinProps> = (props: ColorPinProps): React.ReactNode => {
  const onDragColorOver = (event : React.DragEvent) : void => {
    event.preventDefault();
  }

  return (
    <div
      className={`colorPin ${props.color} ${props.onDragColorStart && !props.disabled ? "Clickable" : ""}`}
      draggable={!!props.onDragColorStart && !props.disabled}
      onDragStart={() => props.onDragColorStart && !props.disabled ? props.onDragColorStart(props.color) : undefined}
      onDragOver={(event) => props.onDragColorEnd && !props.disabled ? onDragColorOver(event) : undefined}
      onDrop={() => props.onDragColorEnd && !props.disabled ? props.onDragColorEnd(props.color) : undefined} />
  );
};