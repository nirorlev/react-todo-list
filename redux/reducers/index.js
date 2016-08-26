import { combineReducers } from 'redux'

import todoReducer from './TodoReducer'
import userReducer from './UserReducer'


const rootReducer = combineReducers({
    todos: todoReducer,
    user: userReducer
});

export default rootReducer