import {Header} from "semantic-ui-react";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from "react";


const Title = ()=>{

    let clicked = false

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const titles = [ "<span>CS Wizard</span>","<span>&lcub; &quot;title&quot;:&quot;CS Wizard&quot; &rcub;</span>", "<span>// CS Wizard</span>", "<span>/* CS Wizard */</span>", '<span># CS Wizard</span>','<span>CSWizard()</span>','<span>CS.Wizard.js</span>','<span>! CS Wizard</span>','<span>CSWizard;</span>','<span>-- CS Wizard</span>','<span>"" || CS Wizard</span>', "<span>CS <em>Rizzard</em></span>"]
    let titleNum


    const [title, setTitle] = useState("")

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        titleNum = Math.floor(Math.random() * titles.length)
        const titleDiv = document.getElementById('title')
        titleDiv.innerHTML = titles[titleNum]
    }, [titles])

    const titleClick = ()=>{
        const titleDiv = document.getElementById('title')
        if (titleNum < titles.length - 1) {
            titleNum++
        } else {
            titleNum = 0
        }
        titleDiv.innerHTML = titles[titleNum]
    }



    return (
        <Header as="h1" id={'title'} className={styles.title} onClick={()=>titleClick()}>{title}</Header>
    )
}

export default Title