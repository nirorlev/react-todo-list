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
    },

    createNewUserIdIfOdd: function() {
        return (dispatch, getState) => {
            const { user } = getState();
            if (user.id % 2 === 1)
                dispatch(actions.createNewUserId());
        }
    },

    createNewUserIdTimeout: function(timeMilis) {
        return (dispatch) => {
            setTimeout( () => { dispatch(actions.createNewUserId()) }, timeMilis);
        }
    },

    // createNewUserIdAsync: function() {
    //     return (dispatch) => {
    //         $.get('url', {
    //             success: (res) => {
    //                 dispatch(actions.createNewUserId(res.data))
    //             }
    //         })
    //     }
    // }
    
}

export default actions