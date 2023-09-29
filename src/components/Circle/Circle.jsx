import React from "react";
import styles from "./Circle.module.css"

const Circle = ({img}) => {
    return (
        <img className={styles.circle_image} src={img}/>
    )
}

export default Circle;
