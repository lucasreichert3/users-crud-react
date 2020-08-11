import React, { useState, useEffect } from 'react';
import { ModalWrapper, ModalContent, Header, ModalBody } from './styles';
import CloseIcon from '@material-ui/icons/Close';

export default function Modal({children, showModal, onClose, headerTitle, size}) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(showModal);
    }, [showModal]);

    const handleClose = () => {
        onClose();
        setShow(false);
    };

    return (
        <ModalWrapper showModal={show}>
            <ModalContent size={size}>
                <Header>
                    <span>{headerTitle}</span>
                    <CloseIcon onClick={handleClose} />
                </Header>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </ModalWrapper>
    );
}
