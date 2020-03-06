import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Form extends Component {
    state = {
        text: ''
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    id="with-placeholder"
                    placeholder="Add new item..."
                    margin="normal"
                />
                <Button variant="contained" type="submit" onClick={this.handleSubmit}>
                    Add item
                </Button>
            </form>
        )
    }
}
