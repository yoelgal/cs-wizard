import {Header} from "semantic-ui-react";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from "react";


const Title = ()=>{

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const titles = [ 'CS Wizard',`{ "title":"CS Wizard" }`, `// CS Wizard`, `/* CS Wizard */`, '# CS Wizard','CSWizard()','CS.Wizard.js','! CS Wizard','CSWizard;','-- CS Wizard','"" || CS Wizard']
    let titleNum


    const [title, setTitle] = useState("")

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        titleNum = Math.floor(Math.random() * titles.length)
        setTitle(titles[titleNum])
    }, [titles])

    const titleClick = ()=>{
        const titleDiv = document.getElementById('title')
        if (titleNum < titles.length - 1) {
            titleNum++
        } else {
            titleNum = 0
        }
        titleDiv.innerText = titles[titleNum]
    }

    return (
        <Header as="h1" id={'title'} className={styles.title} onClick={()=>titleClick()}>{title}</Header>
    )
}

export default Title