import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
export  const  ProjectCard=({
    project:{title, imageSrc, description, skills, source, demo}}) => 
    {
     return (
        <div className={styles.container}>
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`}/>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul  className={styles.skills}>
                        {skills.map((skill,id)=>{
                             <li key={id} className={styles.skill}>{skill}</li>;
                        })}
                    </ul>
                    <div className={styles.links}>
                        <a href={source} className={styles.link}>Source</a>
                        <a href={demo} className={styles.link}>Demo</a>
                    </div>
                </div>
    );
};