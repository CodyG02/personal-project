import difficultyReducer from './difficultyReducer'
import userReducer from './userReducer'
import liftsReducer from './liftsReducer'
import {createStore, combineReducers} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    user: userReducer,
    lift: liftsReducer,
    difficulty: difficultyReducer
})

export default createStore(rootReducer, devToolsEnhancer())