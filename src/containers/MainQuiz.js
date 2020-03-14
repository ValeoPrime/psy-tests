import React, {Component} from 'react'
import styles from './MainQuiz.css';
import ActiveQuestionnaire from '../components/ActiveQuestionnaire/ActiveQuestionnaire'


class MainQuiz extends Component {
    state = {
        questions: [
            {
                question: 'Какого цвета колбаса?',
                rightAnswerId: 3,
                answers: [
                  {text: 'Черный', id: 1},
                  {text: 'Синий', id: 2},
                  {text: 'Красный', id: 3},
                  {text: 'Зеленый', id: 4}
                ]
            }
        ]
    }

    render(){
        return(
            <div className={styles.MainQuiz}>
               <div className={styles.MainQuizWrapper}>
               <h1>"Тестовое задание"</h1>

               {this.state.questions.map((item, index) => {
                   return (
                    <ActiveQuestionnaire 
                    key={index}
                    answers={item.answers}
                    textQuestion={item.question}
                    />
                   )
               })}
                   
               </div>
            </div>
        )
    }
}


export default MainQuiz