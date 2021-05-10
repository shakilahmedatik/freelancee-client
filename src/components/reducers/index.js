import { combineReducers } from 'redux'
import { authReducer } from './auth'

//Combine Multiple Reducer
const rootReducer = combineReducers({
  user: authReducer,
})

export default rootReducer
