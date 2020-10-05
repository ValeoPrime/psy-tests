import React, { Component } from 'react'
import styles from './GuestScreen.css'
import ItemsList from './ItemsList/ItemsList'
import MainQuiz from '../../../containers/MainQuiz'
import { connect } from 'react-redux'
import { fetchAllTestsTitles, testID, guestScreenOff } from '../../../store/actions/guestScreenActions'
import button from '../button/button'
import clases from '../button/button.css'


class GuestScreen extends Component {

    componentDidMount() {
        this.props.fetchAllTestsTitles()
    }

    redirect = () => {
        this.props.history.push('/auth')
        this.props.guestScreenOff()
    }

    render() {
        const cls = [
            clases.button,
            clases.success
        ]
        return (
            <React.Fragment>
                {
                    !this.props.isAuthenticated
                    ? <div className={styles.Div}>
                        <h1>В системе доступны следующие тесты :</h1>
                        <ItemsList
                            allTitles={this.props.allQuestionnaireTitles}
                            onClick={this.props.testID}
                        />
                        <p>но их нельзя запустить пока вы не авторизованы</p>
                        <button
                            className={cls.join(' ')}
                            onClick={this.redirect}
                            children={'Регистрация/Аутентификация'}
                        />
                      </div>
                    :
                        this.props.guestScreen
                        ?
                        <div className={styles.GuestScreen}>
                            <h1>В системе доступны следующие тесты :</h1>
                            <ItemsList
                                onClick={this.props.testID}
                                allTitles={this.props.allQuestionnaireTitles}
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
        guestScreenOff: () => dispatch(guestScreenOff())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestScreen) 