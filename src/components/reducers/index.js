import { combineReducers } from 'redux'
import { authReducer } from './auth'

//Combine Multiple Reducer
const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer
