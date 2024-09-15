import React from "react";
import styles from "./menu.module.css";

export interface MenuProps {
    isOpen: boolean;
    closeMenu: () => void;
    onSave: () => void;
}

export const Menu: React.FC<MenuProps> = (props: MenuProps): React.ReactNode => {
    return (
        <div className={`${styles.overlay} ${props.isOpen ? styles.open : ""}`} onClick={props.closeMenu}>
            <div className={styles.menu} onClick={(event) => event.preventDefault()}>
                <h1>Settings</h1>
                <label>Allow duplicates</label>
                <input type="checkbox"></input>
                <label>Allow empty</label>
                <input type="checkbox" />
                <label>Number of pins</label>
                <input type="number" />
            </div>
        </div>
    );
}