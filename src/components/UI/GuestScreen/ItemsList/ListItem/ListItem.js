import React from 'react'
import styles from './ListItem.css'


const ListItem = (props) => {
    
    return(
        <li className={styles.ListItem}
        onClick={()=>props.onClic(props.title)}
        
        >
            {props.title}
        </li>
    )
}

export default ListItem