import React from 'react';
import { CircularProgress } from '@material-ui/core';

// styles
import styles from './Loader.module.scss';

const Loader = () => {
    return <div className={styles.loader}>
        <CircularProgress color="secondary" />
    </div>
};

export default Loader;
