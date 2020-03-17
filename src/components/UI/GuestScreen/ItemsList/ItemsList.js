import React from 'react'
import styles from './itemsList.css'
import QuestionDB from '../../../DB/QuestionDB'
import ListItem from './ListItem/ListItem'


const ItemsList = (props) => {
    return (
        <ul className={styles.itemsList}>
            {
            Object.values(QuestionDB).map((Questionare, index)=>{
                console.log('элементы опроса',Questionare.questionnaireTitle)
                return (
                    <ListItem
                    key={index}
                    title={Questionare.questionnaireTitle}
                    onClic= {props.onClic}
                    
                    />
                )
            })}
        </ul>
    )
}

export default ItemsList