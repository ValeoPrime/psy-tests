import React, { Component } from 'react'
import styles from './MainQuiz.css';
import ActiveQuestionnaire from '../components/ActiveQuestionnaire/ActiveQuestionnaire'
import FinishedQuestionnaire from '../components/finishedQuestionnaire/FinishedQuestionnaire'
import Loader from '../components/UI/Loader/Loader'
import { connect } from 'react-redux';
import { fetchActiveTest, retryHandler, repeatHandler, answerClick } from '../store/actions/guestScreenActions'



class MainQuiz extends Component {
    componentDidMount() {
        this.props.fetchActiveTest(this.props.testId || this.props.location.pathname.split('/')[2])
    }

    backToList = () => {
        this.props.history.push('/')
        this.props.repeatHandler()
    }

    render() {
        return (
            <React.Fragment>
                {
                    <div className={styles.MainQuiz}>
                        <div className={styles.MainQuizWrapper}>
                            <h1>{`"${this.props.questionnaireTitle}"`}</h1>
                            {
                                !this.props.questionsLoad
                                    ? <Loader />
                                    : this.props.isFinished
                                        ? <FinishedQuestionnaire
                                            results={this.props.results}
                                            questions={this.props.questions}
                                            onRetry={this.props.retryHandler}
                                            onRepeat={this.backToList}
                                        />
                                        : <ActiveQuestionnaire
                                            key={this.props.questions[this.props.activeQuestion].id}
                                            answers={this.props.questions[this.props.activeQuestion].answers}
                                            textQuestion={this.props.questions[this.props.activeQuestion].question}
                                            answerClick={this.props.answerClick}
                                            totalNumQuestions={this.props.questions.length}
                                            QuestionNum={this.props.activeQuestion + 1}
                                            answerState={this.props.answerState}
                                        />
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    return {
        results: state.allTests.results, //{[id]: success error}
<<<<<<< HEAD
        testId: state.allTests.testId, 
=======
        testId: state.allTests.testId, // ccccccccccccccc
>>>>>>> parent of 573fcf1... Updates
        isFinished: state.allTests.isFinished,
        questionsLoad: state.allTests.questionsLoad,
        activeQuestion: state.allTests.activeQuestion,
        answerState: state.allTests.answerState,// {[answerId: 'success' or 'error']}
        questionnaireTitle: state.allTests.questionnaireTitle,
        key: state.allTests.key,
        questions: state.allTests.questions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchActiveTest: (testId) => dispatch(fetchActiveTest(testId)),
        retryHandler: () => dispatch(retryHandler()),
        repeatHandler: () => dispatch(repeatHandler()),
        answerClick: (answerId) => dispatch(answerClick(answerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainQuiz)