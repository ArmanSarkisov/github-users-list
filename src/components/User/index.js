import React, { PureComponent } from 'react';
import {
    Card,
} from '@material-ui/core';

// components
import CardActionsContent from './CardActionsContent';
import CardActionAreaContent from './CardActionAreaContent';

class User extends PureComponent {
    render() {
        const { id, login, avatar, type, htmlUrl, handleDeleteUser, handleOpenModal } = this.props;

        return (
            <Card>
                <CardActionAreaContent
                    login={login}
                    avatar={avatar}
                    type={type}
                />
                <CardActionsContent
                    id={id}
                    htmlUrl={htmlUrl}
                    handleDeleteUser={handleDeleteUser}
                    handleOpenModal={handleOpenModal}
                />
            </Card>
        );
    }
}

export default User;
