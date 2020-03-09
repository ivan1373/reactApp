import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory, Redirect } from "react-router-dom";

export default class Form extends Component {
    state = {
        text: '',
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };

    addItem = event => {
        event.preventDefault();
        console.log(this.state.text)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item: this.state.text
            })
        };
        
        fetch("http://192.168.2.36:5000/items/post", requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            this.props.history.push('/')
        });
    };

    render() {
        return (
            <form onSubmit={this.addItem}>
                <TextField
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    id="with-placeholder"
                    placeholder="Add new item..."
                    margin="normal"
                />
                <Button variant="contained" type="submit">
                    Add item
                </Button>
            </form>
        )
    }
}
