import React from 'react'
import Delete from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";

const listStyle = {
    width: '100%',
    maxWidth: 400,
    wordWrap: 'break-word'
  }

export default props => (
    <div style={listStyle}> 
        <ListItem>
            <ListItemIcon>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemIcon>
            <ListItemText primary={props.text} />
            <ListItemIcon>
                <Link to={`/${props.text}`}><EditIcon></EditIcon></Link>
            </ListItemIcon>
            <ListItemIcon>
                <Delete onClick={props.onDelete}></Delete>
            </ListItemIcon>
        </ListItem>
    </div>
)
