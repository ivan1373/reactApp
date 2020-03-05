import React, { Component } from 'react'
import Item from '../item/Item'
import Form from '../form/Form';

export default class List extends Component {

    state = { data : "Hello Worlds" } 

    render() {
        return (
            <div>
                <Form></Form>
                <ul>
                    <Item data={this.state.data}></Item>
                </ul>
            </div>
        )
    }
}
