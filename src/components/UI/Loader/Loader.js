import React from 'react'
import styles from './Loader.css'

const Loader = () => {
    console.log(styles);
    
    return (
        <div className={styles.lds} />
    )
}

export default Loader