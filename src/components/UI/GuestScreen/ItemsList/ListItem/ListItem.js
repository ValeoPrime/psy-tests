import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../../button/button'
import styles from './ListItem.css'

const ListItem = (props) => {
    localStorage.getItem('token')
    let url = '/'
    if (localStorage.getItem('token')) {
        url = '/quiz/' + props.id
    }
    

    return (
        <li className={styles.ListItem}>
            <NavLink to={url} >
                {props.title}
            </NavLink>
            <Button
             type="delete"
             onClick={() => { props.delete(props.id) }}
             >Х</Button>
             <Button
             type="entry"
             onClick={() => { props.startTest(props.id) }}
             >Начать</Button>
        </li>
    )
}

export default ListItem