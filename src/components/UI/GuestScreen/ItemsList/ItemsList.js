import React from 'react'
import styles from './itemsList.css'
import ListItem from './ListItem/ListItem'



const ItemsList = (props) => {
    console.log('Пришли заголовки',props.allTitles)
    return (
        <ul className={styles.itemsList}>
            {
                props.allTitles.map((title, index) => {

                    return (
                        <ListItem
                            id={index}
                            key={index}
                            title={title}
                            onClick={props.onClick}
                        />
                    )
                })}
        </ul>
    )
}

export default ItemsList