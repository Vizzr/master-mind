import React from "react";
import { MenuIcon } from "../icons/menu-icon/menu-icon";
import styles from "./top-bar.module.css";

export interface TopBarProps {
    openMenu: () => void;
}

export const TopBar: React.FC<TopBarProps> = (props: TopBarProps): React.ReactNode => {
    return (
        <div className={styles.topBar}>
            <div className={styles.title}>Mastermind</div>
            <div className={styles.menuItem} onClick={props.openMenu}><MenuIcon /></div>
        </div>
    );
}