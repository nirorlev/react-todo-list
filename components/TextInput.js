import React, { Component } from 'react'
import TextDisplay from "./TestDisplay"

class TextInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: "Hello World!"
        };
    }

    handleChange(e) {
        this.setState({
            inputText:e.target.value
        })
    }

    render() {
        return (<div>
                <input type="text" placeholder="future text" value={this.state.inputText} onChange={this.handleChange.bind(this)}></input>
                <TextDisplay text={this.state.inputText} />
            </div>
        )
    }
}

export default TextInput