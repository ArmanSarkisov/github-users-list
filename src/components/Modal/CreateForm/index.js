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

const CreateForm = ({ handleInputChange, handleCreateFormSubmit }) => {

    const classes = useStyles();

    return <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleCreateFormSubmit}
    >
        <TextField
            id="standard-basic"
            label="Login"
            name="login"
            onChange={handleInputChange}
        />
        <TextField
            id="standard-basic"
            label="Avatar Url"
            name="avatar"
            onChange={handleInputChange}
        />
        <TextField
            id="standard-basic"
            label="User Type"
            name="type"
            onChange={handleInputChange}
        />
        <TextField
            id="standard-basic"
            label="Link"
            name="htmlUrl"
            onChange={handleInputChange}
        />
        <Button
            variant="contained"
            color="primary"
            type="submit"
        >
            Create
        </Button>
    </form>
};

export default CreateForm;
