import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact=()=>{
    return (
        <footer id="contacts" className={styles.container} >
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:myemail@email.com">myemail@email.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
                    <a href="https://www.linkedin.com/in/piyush-yadav-849b2726b/">linkedin.com/Piyush</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
                    <a href="https://www.github.com/piav19">github.com/Piyush</a>
                </li>

            </ul>
        </footer>
    )
}