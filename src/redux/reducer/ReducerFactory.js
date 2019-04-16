import { combineReducers } from 'redux'
import appReducer from './AppReducer'
import dealDetailReducer from './deal/DealDetailReducer'

const ReducerFactory = combineReducers({
    appData: appReducer,
   dealDetailData: dealDetailReducer
})

export default ReducerFactory