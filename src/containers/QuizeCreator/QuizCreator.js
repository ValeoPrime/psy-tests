import React, {Component} from 'react'
import styles from './QuizCreator.css'
import Button from '../../components/UI/button/button'

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }


render(){
    return(
        <div className={styles.QuizCreator}>
            <div>
                <h1>Создание теста</h1>

                <form onSubmit={this.submitHandler}>

                    <input type="text"/>
                    <hr/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>

                    <select></select>

                    <Button
                    type="primary"
                    onClick={this.addQuestionHandler}
                    >
                    Добавить вопрос
                    </Button>

                    <Button
                    type="success"
                    onClick={this.createQuizHandler}
                    >
                    Создать тест
                    </Button>

                </form>
            </div>
        </div>
    )
}

}