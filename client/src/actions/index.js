import axios from 'axios'
import { FETCH_USER, FETCH_SURVEYS } from './types'

const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    
    dispatch({ type : FETCH_USER, payload: res.data })
}

// export const handleToken = token => async dispatch => {
//     const res = await axios.post('/api/stripes', token)
    
//     dispatch({ type : FETCH_USER, payload: res.data })
// }

const fetchSurvey = () => async dispatch => {
    const res = await axios.get('/api/surveys')

    dispatch({ type: FETCH_SURVEYS, payload: res.data })
}

export default fetchUser