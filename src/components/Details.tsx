import React from 'react'
import { useDispatch } from 'react-redux'
import styles from "../../styles/Dashboard.module.css";
import { changeStep } from '../features/step';


function Details() {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Heading</h1>
            <h3>Schema</h3>
            <p className={styles.link} onClick={() => {dispatch(changeStep('dashboard'))}}>Back</p>
        </div>
    )
}

export default Details
