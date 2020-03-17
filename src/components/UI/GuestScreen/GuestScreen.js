import React from 'react'
import styles from './GuestScreen.css'
import ItemsList from './ItemsList/ItemsList'

const GuestScreen = (props) => {
    return (
        <div className={styles.GuestScreen}>
            <h1>В системе доступны следующие тесты :</h1>
            <ItemsList 
            onClic= {props.onStart}
            />

        </div>
    )
}

export default GuestScreen