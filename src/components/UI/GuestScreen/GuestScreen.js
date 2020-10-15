import React, { Component } from 'react'
import styles from './GuestScreen.css'
import ItemsList from './ItemsList/ItemsList'
import MainQuiz from '../../../containers/MainQuiz'
import { connect } from 'react-redux'
import { fetchAllTestsTitles, testID, guestScreenOff, deleteQuestionare } from '../../../store/actions/guestScreenActions'
import Button from '../button/button'



class GuestScreen extends Component {

    componentDidMount() {
        this.props.fetchAllTestsTitles()
        
    }

    redirect = () => {
        this.props.history.push('/auth')
        this.props.guestScreenOff()
    }

    render() {
       console.log('Пропсы гостя',this.props);
        return (
            <React.Fragment>
                {
                    !this.props.isAuthenticated
                    ? <div className={styles.Div}>
                        <h1>В системе доступны следующие тесты :</h1>
                        <ItemsList
                            allTitles={this.props.allQuestionnaireTitles} 
                            disabled = {true} 
                        />
                        <p>но их нельзя запустить пока вы не авторизованы</p>
                        <Button
                            type="success"
                            children={'Регистрация/Аутентификация'}
                            onClick={this.redirect}
                        />
                      </div>
                    :
                        this.props.guestScreen
                        ?
                        <div className={styles.GuestScreen}>
                            <h1>В системе доступны следующие тесты :</h1>
                            <ItemsList
                                startTest={this.props.testID}
                                allTitles={this.props.allQuestionnaireTitles}
                                delete = {this.props.deleteQuestionare}
                            />
                        </div>
                        :
                        <MainQuiz
                            TESTId={this.props.testId}
                        />
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        guestScreen: state.allTests.guestScreen,
        allQuestionnaireTitles: state.allTests.allQuestionnaireTitles,
        
        testId: state.allTests.testId,
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllTestsTitles: () => dispatch(fetchAllTestsTitles()),
        testID: (testId) => dispatch(testID(testId)),
        guestScreenOff: () => dispatch(guestScreenOff()),
        deleteQuestionare: (id) => dispatch(deleteQuestionare(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestScreen) 