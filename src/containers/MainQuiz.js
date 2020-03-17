import React, {Component} from 'react'
import styles from './MainQuiz.css';
import ActiveQuestionnaire from '../components/ActiveQuestionnaire/ActiveQuestionnaire'
import FinishedQuestionnaire from '../components/finishedQuestionnaire/FinishedQuestionnaire'


class MainQuiz extends Component {
    state = {
        results: {}, //{[id]: success error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null,// {[answerId: 'success' or 'error']}
        questions: [
            {
                question: 'Какого цвета колбаса?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                  {text: 'Черный', id: 1},
                  {text: 'Синий', id: 2},
                  {text: 'Красный', id: 3},
                  {text: 'Зеленый', id: 4}
                ]
            },
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                  {text: 'Черный', id: 1},
                  {text: 'Синий', id: 2},
                  {text: 'Белый', id: 3},
                  {text: 'Фиолетовый', id: 4}
                ]
            }
        ]
    }

    answerClick=(answerId)=>{

        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]

            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.questions[this.state.activeQuestion]
        const results = this.state.results

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })

            const timeout = setTimeout(()=>{
                if(this.isQuestionnaireFinished()){
                   this.setState({
                       isFinished: true
                   })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
        }
        
      
    }

    isQuestionnaireFinished(){
        return this.state.activeQuestion + 1 === this.state.questions.length ? true : false
    }

    retryHandler=()=>{
        this.setState({
            results: {}, //{[id]: success error}
            isFinished: false,
            activeQuestion: 0,
            answerState: null
        })
    }


    render(){
        return(
            <div className={styles.MainQuiz}>
               <div className={styles.MainQuizWrapper}>
                    <h1>"Тестовое задание"</h1>
               {
                   this.state.isFinished 
                   ? <FinishedQuestionnaire 
                    results={this.state.results}
                    questions={this.state.questions}
                    onRetry={this.retryHandler}
                   />
                   : <ActiveQuestionnaire 
                    key={this.state.questions[this.state.activeQuestion].id}
                    answers={this.state.questions[this.state.activeQuestion].answers}
                    textQuestion={this.state.questions[this.state.activeQuestion].question}
                    answerClick={this.answerClick}
                    totalNumQuestions={this.state.questions.length}
                    QuestionNum={this.state.activeQuestion + 1 }
                    answerState={this.state.answerState}
                   />
               }
               
            
               </div>
            </div>
        )
    }
}


export default MainQuiz