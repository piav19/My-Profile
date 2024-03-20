import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css";
export default function Hero(){
    return (
        <section className={styles.container}>
        <div className={styles.content}>
            <h1  className={styles.title}>Hi, I am Piyush Yadav</h1>
            <p className={styles.description}>I am a front-end developer, proficient in React, JavaScript, HTML and CSS.</p>
            <a href="mailto:ypiyush838@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/myImage2.jpg")} alt="my Image" className={styles.myImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        </section>
    )
}