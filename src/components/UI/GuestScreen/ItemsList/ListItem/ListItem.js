import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ListItem.css'

const ListItem = (props) => {
    localStorage.getItem('token')
    let url = '/'
    if (localStorage.getItem('token')) {
        url = '/quiz/' + props.id
    }

    return (
        <li className={styles.ListItem}
            onClick={() => { props.onClick(props.id) }} // передавать айди
        >
            <NavLink to={url}>
                {props.title}
            </NavLink>

        </li>
    )
}

export default ListItem