import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';


// styles
import styles from './Modal.module.scss';

// components
import EditForm from './EditForm';
import CreateForm from './CreateForm';

const ModalContent = ({
    open,
    edit,
    handleCloseModal,
    handleInputChange,
    handleFormSubmit,
    handleCreateFormSubmit,
    user: { id, login, avatar, type, htmlUrl }
}) => {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={ styles.modal }
                open={ open }
                onClose={ handleCloseModal }
                closeAfterTransition
                BackdropComponent={ Backdrop }
                BackdropProps={ {
                    timeout: 500,
                } }
            >
                <Fade in={ open }>
                    <div className={ styles.paper }>
                        {edit ? <EditForm
                            id={id}
                            login={login}
                            avatar={avatar}
                            type={type}
                            htmlUrl={htmlUrl}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleFormSubmit}
                        /> : <CreateForm
                            handleCreateFormSubmit={handleCreateFormSubmit}
                            handleInputChange={handleInputChange}
                        />}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};


export default ModalContent;
