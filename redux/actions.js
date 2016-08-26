let actions = {
    actionTypes: {
        ADD_TODO: "ADD_TODO",
        COMPLETE_TODO: "COMPLETE_TODO",
        DELETE_TODO: "DELETE_TODO"
    },

    addTodo: function(text) {
        return {
            type: actions.actionTypes.ADD_TODO,
            text: text
        }
    },

    completeTodo: function(id) {
        return {
            type: actions.actionTypes.COMPLETE_TODO,
            id: id
        }
    },

    deleteTodo: function(id) {
        return {
            type: actions.actionTypes.DELETE_TODO,
            id: id
        }
    }
}

export default actions