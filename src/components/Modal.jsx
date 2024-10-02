import { Modal as ModalOverlay, ModalContent, ModalClose, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from 'react-ease-modal';
import { Link } from 'react-router-dom';

function Modal({ isOpen, onClose }) {
    return (
        <ModalOverlay className="modal-overlay" open={isOpen} ariaLabelledBy="modal-title" ariaDescribedBy="modal-description">
            <ModalContent className="modal-container">
                <ModalClose className="modal-icon" onClose={onClose} ariaLabel="Close modal" />
                <img className="modal-img pb-4 m-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/images/check.svg" alt="" />
                <ModalHeader className="modal-header">
                    <ModalTitle className="modal-title" id="modal-title">
                        Confirmation
                    </ModalTitle>
                    <ModalDescription className="modal-description" id="modal-description">
                        The employee has been successfully added !
                    </ModalDescription>
                </ModalHeader>
                <ModalFooter className="modal-footer w-full">
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow hover:bg-secondary/90 h-9 px-4 py-2 w-1/3"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <Link
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-1/3"
                        to="/employees"
                    >
                        Go to table
                    </Link>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    );
}
export default Modal;
