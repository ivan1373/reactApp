import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Item extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <li>{this.props.data}</li>
            </div>
        )
    }
}
