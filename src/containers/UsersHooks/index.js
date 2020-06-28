import React, { useCallback, useEffect, useState } from 'react';

// hooks
import { useHttp } from '../../hooks/useHttp';

// utils
import { getRandomId } from '../../utils/getRandomId';

// helpers
import { validator } from '../../helpers/validator';

// components
import User from '../../components/User';
import ModalContent from '../../components/Modal';
import AddUser from '../../components/AddUser';
import Container from '../../components/common/Container';
import Loader from '../../components/common/Loader';


const UsersHooksContainer = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        id: '',
        login: '',
        avatar: '',
        type: '',
        htmlUrl: '',
    });
    const [modal, setModal] = useState({
        isOpen: false,
        isEdit: false,
    });

    const { data, isLoading } = useHttp('users');

    useEffect(() => {
        setUsers(data);
    }, [data]);

    const handleDeleteUser = useCallback(userId => {
        const updatedUsers = users.filter(u => u.id !== userId);

        setUsers(updatedUsers);
    }, [users]);

    const handleOpenModal = useCallback(userId => {
        const updatedUser = users.find(u => u.id === userId);
        setUser(prevState => ({
            ...prevState,
            id: updatedUser.id,
            login: updatedUser.login,
            avatar: updatedUser.avatar_url,
            type: updatedUser.type,
            htmlUrl: updatedUser.html_url,
        }));
        setModal(prevState => ({
            ...prevState,
            isOpen: true,
            isEdit: true,
        }));
    }, [users]);

    const handleCloseModal = useCallback(() => {
        setModal(prevState => ({
            ...prevState,
            isOpen: false,
            isEdit: false,
        }));
    }, []);

    const handleInputChange = useCallback(e => {
        e.persist();

        const { name, value } = e.target;

        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));

    }, []);

    const handleFormSubmit = useCallback((e, userId) => {
        e.preventDefault();

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

        setUsers(updatedUsers);

        setModal(prevState => ({
            ...prevState,
            isOpen: false,
            isEdit: false,
        }));
    }, [user, users]);

    const handleCreateUser = useCallback(() => {
        setModal(prevState => ({
            ...prevState,
            isOpen: true,
        }));
    }, []);

    const handleCreateFormSubmit = useCallback(e => {
        e.preventDefault();

        const { login, avatar, type, htmlUrl } = user;

        if (!validator(login, avatar, type, htmlUrl)) return;

        user.id = getRandomId();

        setUsers(prevState => {
            return [ {...user}, ...prevState];
        });

        setUser(prevState => ({
            ...prevState,
            id: '',
            login: '',
            avatar: '',
            type: '',
            htmlUrl: '',
        }));

        setModal(prevState => ({
            ...prevState,
            isOpen: false,
            isEdit: false,
        }))

    }, [user]);

    if(isLoading) {
        return <Loader />
    }

    return <Container>
        <AddUser handleCreateUser={handleCreateUser} />
        { users.map(user => {
            return <User
                key={ user.id }
                id={ user.id }
                login={ user.login }
                avatar={ user.avatar_url }
                type={ user.type }
                htmlUrl={ user.html_url }
                handleDeleteUser={ handleDeleteUser }
                handleOpenModal={ handleOpenModal }
            />;
        }) }
        <ModalContent
            open={ modal.isOpen }
            edit={ modal.isEdit }
            user={ user }
            handleCloseModal={ handleCloseModal }
            handleInputChange={ handleInputChange }
            handleFormSubmit={ handleFormSubmit }
            handleCreateFormSubmit={ handleCreateFormSubmit }
        />
    </Container>;
};

export default UsersHooksContainer;
