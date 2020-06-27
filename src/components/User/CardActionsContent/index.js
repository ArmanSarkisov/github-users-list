import React from 'react';
import { Button, CardActions } from '@material-ui/core';


const CardActionsContent = ({ id, htmlUrl, handleOpenModal, handleDeleteUser }) => (
    <CardActions>
        <Button
            size="small"
            color="primary"
            component="a"
            target="_blank"
            href={ htmlUrl }
        >
            Open User Page
        </Button>
        <Button
            size="small"
            color="primary"
            onClick={() => handleOpenModal(id)}
        >
            Edit User
        </Button>
        <Button
            size="small"
            color="secondary"
            onClick={ () => handleDeleteUser(id) }
        >
            Delete User
        </Button>
    </CardActions>
);

export default CardActionsContent;
