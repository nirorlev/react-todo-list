import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'

// Add middleware
let finalCreateStore = compose(applyMiddleware(logger()))(createStore);

export default function configureStore(initialState = { todos: [], user: {} }) {
    return finalCreateStore(rootReducer, initialState)
}