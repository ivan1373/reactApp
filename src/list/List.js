import React, { Component } from 'react'
import Item from '../item/Item';
import ListUI from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';


export default class List extends Component {

    state = {
        items: []
    }

    handleDeleteItem = (text) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item: text
            })
        };

        fetch("http://192.168.2.36:5000/items/delete", requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            this.getData();
        });
    }


    getData = () => {
        fetch("http://192.168.2.36:5000/items")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result.ITEMS
              });
            },
            (error) => {
              console.log(error)
            }
        )
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Grid container 
                spacing={0}
                direction="column" 
                alignItems="center"
                justify="center">
                <div>
                    <ListUI>
                        {this.state.items.map((item,index) => {
                            return (
                                <Item key={index} text={item} onDelete={() => this.handleDeleteItem(item)}></Item>
                            )
                        })}
                    </ListUI>
                </div>
            </Grid>
        )
    }
}
