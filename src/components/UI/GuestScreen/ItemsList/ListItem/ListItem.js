import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './ListItem.css'


const ListItem = (props) => {
    console.log('Пропсы айтема' ,props)
    return(
        <li className={styles.ListItem}
        onClick={()=>props.onClic(props.title)}
        >
            <NavLink to={'/quiz/' + props.id}>
                {props.title}
            </NavLink>
            
        </li>
    )
}

export default ListItem