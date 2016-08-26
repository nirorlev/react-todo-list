import actions from '../actions'

function getId(todos) {
    // Returns maxID + 1
    return todos.reduce((maxId, todoItem) => { return Math.max(maxId, todoItem.id) }, -1) + 1;
}

export default function todoReducer(todos = [], action) {
    switch(action.type) {
        case actions.actionTypes.ADD_TODO:
            return [{text: action.text, completed:false, id:getId(todos)}, ...todos];
        case actions.actionTypes.COMPLETE_TODO:
            return todos.map((todo) => { return todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo });
        case actions.actionTypes.DELETE_TODO:
            return todos.filter((todo) => { return todo.id !== action.id });
        default:
            return todos;
    }
}
