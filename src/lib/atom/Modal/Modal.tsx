import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/modal";

import {FC, ReactNode} from "react";

interface Props {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title: string

}

export const CustomModal: FC<Props> = ({isOpen, onClose, children, title = 'Create Task'}) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody mb={'24px'}>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}