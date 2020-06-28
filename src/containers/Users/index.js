import React, { Component } from 'react';

// api
import { getAllUsers } from '../../api';

// components
import User from '../../components/User';
import ModalContent from '../../components/Modal';
import AddUser from '../../components/AddUser';
import { getRandomId } from '../../utils/getRandomId';
import { validator } from '../../helpers/validator';
import Container from '../../components/common/Container';

class UsersContainer extends Component {
    state = {
        users: [],
        user: {
            id: '',
            login: '',
            avatar: '',
            type: '',
            htmlUrl: '',
        },
        modal: {
            isOpen: false,
            isEdit: false,
        }
    };

    componentDidMount() {
        getAllUsers()
            .then(data => this.setState(prevState => ({
                ...prevState,
                users: [...this.state.users, ...data],
            })));
    }

    handleDeleteUser = userId => {
        const { users } = this.state;
        const updatedUsers = users.filter(u => u.id !== userId);

        this.setState(prevState => ({
            ...prevState,
            users: updatedUsers,
        }));
    };

    handleOpenModal = userId => {
        const { users } = this.state;

        if (!userId) {
            this.setState(prevState => ({
                ...prevState,
                modal: {
                    isOpen: true,
                    isEdit: false,
                },
            }));

            return;
        }

        const currentUser = users.find(u => u.id === userId);

        this.setState(prevState => {
            return {
                ...prevState,
                user: {
                    ...prevState.user,
                    id: currentUser.id,
                    login: currentUser.login,
                    avatar: currentUser.avatar_url,
                    type: currentUser.type,
                    htmlUrl: currentUser.html_url,
                },
                modal: {
                    isOpen: true,
                    isEdit: true,
                },
            };
        });
    };

    handleCloseModal = () => {
        this.setState(prevState => ({
            ...prevState,
            user: {
                id: '',
                login: '',
                avatar: '',
                type: '',
                htmlUrl: '',
            },
            modal: {
                isOpen: false,
                isEdit: false,
            }
        }));
    };

    handleInputChange = e => {
        e.persist();

        const { name, value } = e.target;

        this.setState(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value,
            }
        }));
    };

    handleFormSubmit = (e, userId) => {
        e.preventDefault();

        const { users, user } = this.state;

        const { login, avatar, htmlUrl, type } = user;

        if (!validator(login, avatar, type, htmlUrl)) return;

        const updatedUsers = users.map(u => {
            if (u.id === userId) {
                return {
                    ...u,
                    id: user.id,
                    login: user.login,
                    avatar_url: user.avatar,
                    type: user.type,
                    html_url: user.htmlUrl,
                };
            }
            return u;
        });

        this.setState(prevState => ({
            ...prevState,
            users: updatedUsers,
            modal: {
                isOpen: false,
                isEdit: false,
            }
        }));
    };

    handleCreateUser = () => {
        this.setState(prevState => ({
            ...prevState,
            modal: {
                isOpen: true,
                isEdit: false,
            }
        }));
    };

    handleCreateFormSubmit = e => {
        e.preventDefault();

        const { user, users } = this.state;

        const { login, avatar, type, htmlUrl } = user;

        if (!validator(login, avatar, type, htmlUrl)) return;

        user.id = getRandomId();

        this.setState(prevState => ({
            ...prevState,
            users: [{ ...user }, ...users],
            user: {
                id: '',
                login: '',
                avatar: '',
                type: '',
                htmlUrl: '',
            },
            modal: {
                isOpen: false,
                isEdit: false,
            }
        }));
    };

    render() {
        const { users, user, modal } = this.state;

        return (
            <Container>
                <AddUser handleCreateUser={ this.handleCreateUser } />
                { users.map(user => {
                    return <User
                        key={ user.id }
                        id={ user.id }
                        login={ user.login }
                        avatar={ user.avatar_url }
                        type={ user.type }
                        htmlUrl={ user.html_url }
                        handleDeleteUser={ this.handleDeleteUser }
                        handleOpenModal={ this.handleOpenModal }
                    />;
                }) }
                <ModalContent
                    open={ modal.isOpen }
                    edit={ modal.isEdit }
                    user={ user }
                    handleCloseModal={ this.handleCloseModal }
                    handleInputChange={ this.handleInputChange }
                    handleFormSubmit={ this.handleFormSubmit }
                    handleCreateFormSubmit={ this.handleCreateFormSubmit }
                />
            </Container>
        );
    }
}

export default UsersContainer;
