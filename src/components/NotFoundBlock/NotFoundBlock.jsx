import NotFound from "../../pages/NotFound";
import styles from "./NotFoundBlock.module.scss";
import React from "react";

const NotFoundBlock = () => {
    return(
        <div className={styles.root}>
            <h1>Нічого не знайдено :(</h1>
            <p>На жаль ця сторінка відсутня в нашому інтернет магазині</p>
        </div>

    )
}

export default NotFoundBlock