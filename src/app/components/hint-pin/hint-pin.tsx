import { Hint } from "@/app/models/hint";
import "./hint-pin.css";

export interface HintPinProps {
    hint?: Hint;
}

export const HintPin: React.FC<HintPinProps> = (props: HintPinProps): React.ReactNode => {
    let className = "Empty";

    if (props.hint?.correctPosition)
        className = "Correct";
    else if (props.hint?.differentPosition)
        className = "Different";

    return (
        <div className={"hintPin " + className} />
    );
};