import React, {Component} from 'react'
import styles from './GuestScreen.css'
import ItemsList from './ItemsList/ItemsList'
import MainQuiz from '../../../containers/MainQuiz'
import QuestionDB from '../../DB/QuestionDB'

class GuestScreen extends Component {
    state = {
        guestScreen: true,
        questionnaireTitle: 'Тестовый заголовок',
        questions: []
    }


    onStart =(questionnaireTitle) => {
        let Title = null
        let questions = []
        
        
        Object.values(QuestionDB).map((Questionare, index)=>{
            if(questionnaireTitle === Questionare.questionnaireTitle){
                
                Title = Questionare.questionnaireTitle
                questions = Questionare.questions
            }  
        })

        this.setState({
            guestScreen: false,
            questionnaireTitle: Title,
            questions: questions
        })
      
    }
   


    render(){
        
        return (
            <React.Fragment>
            {
                this.state.guestScreen 
                ?
                <div className={styles.GuestScreen}>
                    <h1>В системе доступны следующие тесты :</h1>
                    <ItemsList 
                    onClic= {this.onStart}
                    />
                </div>
                :
                <MainQuiz 
                title= {this.this.state.questionnaireTitle} //Так и не получается пробросить данные в маин
                qs= {this.this.state.questions}
                />
            }
            </React.Fragment>
        )

    }


    
}


export default GuestScreen