import styles from "./checkmark.module.css";

export interface CheckmarkProps {
    showPlaceholder: boolean;
    onGuess?: () => void;
}

export const Checkmark: React.FC<CheckmarkProps> = (props: CheckmarkProps): React.ReactNode => {
    if (props.showPlaceholder)
        return (
            <div className={styles.emptyCheckmark} />
        );
    else
        return (
            <div
                className={styles.checkmark}
                onClick={props.onGuess ? props.onGuess : undefined} />
        );
}