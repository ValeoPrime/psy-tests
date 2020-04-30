import axios from 'axios'
import { FETCH_QUESTIONARE_TITLES, FETCH_QUESTIONARE_TITLES_ERROR, FETCH_TEST_ID } from './actionTypes'

export function fetchAllTestsTitles() {
    return async dispatch => {
        try {
            const response = await axios.get('https://quiz-316f6.firebaseio.com/quizes.json')

            const allQuestionnaireTitles = []

            Object.keys(response.data).forEach(key => {
                let t = [key, response.data[key][0].questionareTitle]
                allQuestionnaireTitles.push(t)

            })

            dispatch(fetchAllQuestionnaireTitles(allQuestionnaireTitles))


        } catch (e) {
            dispatch(fetchAllQuestionnaireTitlesError(e))
        }
    }

}

export function testID(testId) {
    return {
        type: FETCH_TEST_ID,
        testId: testId
    }
}

export function fetchAllQuestionnaireTitles(allQuestionnaireTitles) {
    return {
        type: FETCH_QUESTIONARE_TITLES,
        allQuestionnaireTitles
    }
}

export function fetchAllQuestionnaireTitlesError(e) {
    return {
        type: FETCH_QUESTIONARE_TITLES_ERROR,
        error: e
    }
}
