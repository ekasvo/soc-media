import React from "react";
import styles from "./Button.module.css"

const Button = ({children, onClick, className, disabled}) => {
    return (
        <button disabled={disabled} className={styles[className]} onClick={onClick}>{children}</button>
    )
}

export default Button;
