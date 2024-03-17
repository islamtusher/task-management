/* eslint-disable react/prop-types */

import { Modal } from 'react-bootstrap';

const ModalContainer = ({ show, handleClose, children }) => {
    console.log(show)
    return (
        <Modal show={show} onHide={handleClose}>
            {children}
        </Modal>
    );
};

export default ModalContainer;