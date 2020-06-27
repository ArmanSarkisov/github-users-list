import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > *': {
            margin: theme.spacing(1),
            width: '90%',
        },

        '& > button': {
            width: '70%',
        }
    },
}));

const EditForm = ({ id, login, avatar, type, htmlUrl, handleInputChange, handleFormSubmit, }) => {

    const classes = useStyles();

    return <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleFormSubmit(e, id)}
    >
        <TextField
            id="standard-basic"
            label="Login"
            value={login}
            name="login"
            onChange={handleInputChange}
        />
        <TextField
            id="standard-basic"
            label="Avatar Url"
            name="avatar"
            value={avatar}
            onChange={handleInputChange}
        />
        <TextField
            id="standard-basic"
            label="User Type"
            name="type"
            value={type}
            onChange={handleInputChange}
        />
        <TextField
            id="standard-basic"
            label="Link"
            name="htmlUrl"
            value={htmlUrl}
            onChange={handleInputChange}
        />
        <Button
            variant="contained"
            color="primary"
            type="submit"
        >
            Edit
        </Button>
    </form>
};

export default EditForm;
