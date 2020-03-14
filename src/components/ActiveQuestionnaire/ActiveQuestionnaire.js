import React from 'react'
import classes from './ActiveQuestionnaire.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuestionnaire = (props) => {
    return (
        <div className={classes.ActiveQuestionnaire}>   
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong> &nbsp;
                    {props.textQuestion}
                </span>

                <small>4 из 12</small>
            </p>

            <AnswersList 
                answers={props.answers}
            />
        </div>
    )
}

export default ActiveQuestionnaire