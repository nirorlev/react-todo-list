import actions from './actions'

function getId(state) {
    // Returns maxID + 1
    return state.todos.reduce((maxId, todoItem) => { return Math.max(maxId, todoItem.id) }, -1) + 1;
}

export default function reducer(state, action) {
    switch(action.type) {
        case actions.actionTypes.ADD_TODO:
            return Object.assign({}, state, {
                todos: [{text: action.text, completed:false, id:getId(state)}, ...state.todos]
            });
        case actions.actionTypes.COMPLETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    return todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo
                })
            });
        case actions.actionTypes.DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => { return todo.id !== action.id })
            });
        case actions.actionTypes.CREATE_NEW_USER_ID:
            return Object.assign({}, state, {
                user: { username: state.user.username, id: action.id }
            });
        default:
            return state;
    }
}
