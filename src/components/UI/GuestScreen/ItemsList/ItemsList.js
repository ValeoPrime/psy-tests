import React from 'react'
import styles from './itemsList.css'
import ListItem from './ListItem/ListItem'



const ItemsList = (props) => {
    return (
        <ul className={styles.itemsList}>
            {
                props.allTitles.map((title, index) => {
                    return (
                        <ListItem
                            id={title[0]}
                            key={index}
                            title={title[1]}
                            startTest={props.startTest}
                            delete = {props.delete}
                        />
                    )
                })}
        </ul>
    )
}

export default ItemsList