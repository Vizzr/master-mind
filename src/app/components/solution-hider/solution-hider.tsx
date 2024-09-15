import styles from "./solution-hider.module.css";

export const SolutionHider: React.FC = (): React.ReactNode => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.hider}>Solution</div>
        </div>
    );
};