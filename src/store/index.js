import {createStore, combineReducers, applyMiddleware} from 'redux'
import {countReducer} from './counterReducer'
import {usersReducer} from './usersReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
    countReducer: countReducer,
    userReducer: usersReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)