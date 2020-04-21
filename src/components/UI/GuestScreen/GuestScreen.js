import React, { Component } from 'react'
import styles from './GuestScreen.css'
import ItemsList from './ItemsList/ItemsList'
import MainQuiz from '../../../containers/MainQuiz'
// import QuestionDB from '../../DB/QuestionDB'
import axios from 'axios'

class GuestScreen extends Component {
    state = {
        guestScreen: true,
        allQuestionnaireTitles: ['Тестовый заголовок', 'Тестовый заголовок 2'],
        testId: ''
    }


    onStart = async (testId) => {


        // try {
        //     const response = await axios.get(`https://quiz-316f6.firebaseio.com/quizes/${testId}.json`)
        //     console.log('ОТВЕТ ОТ СЕРВЕРА ', response)
        //     response.data.map(item => {
        //         // Title = item.questionareTitle
        //         // questions.push(item.questions)
        //     })

        // } catch (e) {
        //     console.log(e)
        // }



        // Object.values(QuestionDB).forEach(((Questionare) => {
        //     if (questionnaireTitle === Questionare.questionnaireTitle) {

        //         Title = Questionare.questionnaireTitle
        //         questions = Questionare.questions
        //     }

        // }))

        this.setState({
            guestScreen: false,
            testId: testId
        })

    }

    async componentDidMount() {

        try {
            const response = await axios.get('https://quiz-316f6.firebaseio.com/quizes.json')

            const allQuestionnaireTitles = []

            Object.keys(response.data).forEach(key => {
                let t = [key, response.data[key][0].questionareTitle]
                // {[key] : response.data[key][0].questionareTitle}
                allQuestionnaireTitles.push(t)

            })

            this.setState({
                allQuestionnaireTitles
            })

        } catch (e) {
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
                            testId={this.state.testId} //Так и не получается пробросить данные в маин
                        />
                }
            </React.Fragment>
        )


    }



}


export default GuestScreen