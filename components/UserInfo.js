import React, { Component } from 'react'
import actions from '../redux/actions'

class UserInfo extends Component {

    handleNewId() {
        this.props.actions.createNewUserId()
    }

    handleNewIdIfOdd() {
        this.props.actions.createNewUserIdIfOdd()
    }

    handleNewIdTimeout() {
        this.props.actions.createNewUserIdTimeout(1000)
    }

    render() {
        return (
            <li>
                <div>username: { this.props.user.username }</div>
                <div>user-id: { this.props.user.id }</div>
                <button onClick={ this.handleNewId.bind(this) }>Update ID</button>
                <button onClick={ this.handleNewIdIfOdd.bind(this) }>Update If Odd</button>
                <button onClick={ this.handleNewIdTimeout.bind(this) }>Update Async 1000</button>
                <button onClick={ () => {this.props.actions.createNewUserIdTimeout(2000)} }>Update Async 2000</button>
            </li>
        )
    }
}

export default UserInfo