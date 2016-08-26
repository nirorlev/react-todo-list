import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Add middleware
let finalCreateStore = compose(applyMiddleware(thunk, logger()))(createStore);

export default function configureStore(initialState = { todos: [], user: {} }) {
    return finalCreateStore(rootReducer, initialState)
}