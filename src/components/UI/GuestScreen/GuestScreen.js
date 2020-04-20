import React, { Component } from 'react'
import styles from './GuestScreen.css'
import ItemsList from './ItemsList/ItemsList'
import MainQuiz from '../../../containers/MainQuiz'
import QuestionDB from '../../DB/QuestionDB'
import axios from 'axios'

class GuestScreen extends Component {
    state = {
        guestScreen: true,
        allQuestionnaireTitles: ['Тестовый заголовок', 'Тестовый заголовок 2'],
        questionnaireTitle: '',
        questions: []
    }


    onStart = (questionnaireTitle) => {
        let Title = null
        let questions = []


        Object.values(QuestionDB).forEach(((Questionare) => {
            if (questionnaireTitle === Questionare.questionnaireTitle) {

                Title = Questionare.questionnaireTitle
                questions = Questionare.questions
            }
            
        }))
        
       

        this.setState({
            guestScreen: false,
            questionnaireTitle: Title,
            questions: questions
        })

    }

    async componentDidMount(){

        try {
            const response =  await axios.get('https://quiz-316f6.firebaseio.com/quizes.json')
            
            const allQuestionnaireTitles = []
          
            Object.keys(response.data).forEach(key => {
                let t = {[key] : response.data[key][0].questionareTitle}
                allQuestionnaireTitles.push(t)
                
            })
            
            this.setState({
                allQuestionnaireTitles
            })
            console.log('РЕСПОНС', response)
            console.log('Уходят заголовки',allQuestionnaireTitles)
            
        } catch (e){
            console.log(e)
        }
        
    }

    render() {

        return (
            <React.Fragment>
                {
                    this.state.guestScreen
                        ?
                        <div className={styles.GuestScreen}>
                            <h1>В системе доступны следующие тесты :</h1>
                            <ItemsList
                                onClick={this.onStart}
                                allTitles={this.state.allQuestionnaireTitles}
                            />
                        </div>
                        :
                        <MainQuiz
                            title={this.state.questionnaireTitle} //Так и не получается пробросить данные в маин
                            qs={this.state.questions}
                        />
                }
            </React.Fragment>
        )


    }



}


export default GuestScreen