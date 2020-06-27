import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// styles
import styles from './AddUser.module.scss';

const AddUser = ({ handleCreateUser }) => (
    <Card>
        <CardActionArea className={styles.add} onClick={handleCreateUser}>
            <AddIcon />
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Add User
            </Typography>
        </CardContent>
    </Card>
);

export default AddUser;
