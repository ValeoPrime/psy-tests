import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ListItem.css'


const ListItem = (props) => {
    // console.log('ПРОПСЫ ЛИСТ АЙТЕМА', props.id)
    return (
        <li className={styles.ListItem}
            onClick={() => { props.onClick(props.id) }} // передавать айди
        >
            <NavLink to={'/quiz/' + props.id}>
                {props.title}
            </NavLink>

        </li>
    )
}

export default ListItem