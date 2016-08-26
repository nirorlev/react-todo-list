let actions = {
    actionTypes: {
        ADD_TODO: "ADD_TODO",
        COMPLETE_TODO: "COMPLETE_TODO",
        DELETE_TODO: "DELETE_TODO",
        CREATE_NEW_USER_ID: "CREATE_USER_ID"
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
    },

    createNewUserId: function() {
        return {
            type: actions.actionTypes.CREATE_NEW_USER_ID,
            id: Math.round(Math.random()*100)
        }
    }
}

export default actions