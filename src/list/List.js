import React, { Component } from 'react'
import Item from '../item/Item'

export default class List extends Component {

    state = { data : "Hello Worlds" } 

    render() {
        return (
            <div>
                <ul>
                    <Item data={this.state.data}></Item>
                </ul>
            </div>
        )
    }
}
