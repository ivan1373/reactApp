import React, { Component } from 'react'

export default class EditItem extends Component {
    state = {
        text: this.props.match.params.text
     } 
     
     handleChange(e) {
        this.setState({ text: e.target.value });
      }

     editItem = (event) => {
        event.preventDefault();
         console.log({
            old_item: this.props.match.params.text,
            new_item: this.state.text
        })
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                old_item: this.props.match.params.text,
                new_item: this.state.text
            })
        };
        
        fetch("http://192.168.2.36:5000/items/edit", requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            
        });
     }

    render() {
        return (
            <div>
                <h1>Edit item</h1>
                <form onSubmit={this.editItem}>
                    <input 
                        type="text" 
                        value={this.state.text} 
                        onChange={this.handleChange.bind(this)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
