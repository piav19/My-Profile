import  React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./About.module.css";
export default function About(){
    return(
    <section className={styles.container} id="about">
        
        <h2 className={styles.title}>About</h2>
        
        <div className={styles.content}><img src={getImageUrl("about/myImage22.jpg")} 
        alt='second-image' className={styles.aboutImage}/>
        
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Curson icon"/>
            <div className={styles.aboutItemText}>
                <h3>React</h3>
                <p>I m experienced in building responsive and
                    optimized react apps.
                </p>
            </div>
            </li>

            
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p> I have experience in developing fast and optimized back-end systems
                    and API's.
                </p>
            </div>
            </li>

             <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor2 icon"/>
            <div className={styles.aboutItemText}>
                <h3>JavaScript</h3>
                <p>Strong in JavaScript to create apps.
                </p>
            </div>
            </li>
        </ul>
        </div>
    </section>
    )
}