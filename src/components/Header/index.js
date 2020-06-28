import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List } from '@material-ui/core';

// styles
import styles from './Header.module.scss';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function Header() {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={ clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            }) }
            role="presentation"
            onClick={ toggleDrawer(anchor, false) }
            onKeyDown={ toggleDrawer(anchor, false) }
        >
            <List className={styles.header_list}>
                <Button variant="contained" color="primary">
                    <NavLink exact to="/" className={styles.header_link}>
                        Users With Classes
                    </NavLink>
                </Button>
                <Button variant="contained" color="primary">
                    <NavLink exact to="/users-hook" className={styles.header_link}>
                        Users With Hooks
                    </NavLink>
                </Button>
            </List>
        </div>
    );

    return (
        <div className={styles.header}>
            { ['left'].map((anchor) => (
                <React.Fragment key={ anchor }>
                    <Button onClick={ toggleDrawer(anchor, true) }>open menu</Button>
                    <Drawer anchor={ anchor } open={ state[anchor] } onClose={ toggleDrawer(anchor, false) }>
                        { list(anchor) }
                    </Drawer>
                </React.Fragment>
            )) }
        </div>
    );
}
