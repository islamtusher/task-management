/* eslint-disable react/prop-types */

import { Modal } from 'react-bootstrap';

const ModalHeader = ({children}) => {
    return (
        <Modal.Header closeButton>
          <Modal.Title>{children}</Modal.Title>
        </Modal.Header>
    );
};

export default ModalHeader;