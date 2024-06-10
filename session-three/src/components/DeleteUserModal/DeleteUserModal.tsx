import Button from "../Button/Button.tsx";
import Modal from "../Modal/Modal.tsx";
import styles from "./DeleteUserModal.module.scss";
import { DeleteUserModalProps } from "./DeleteUserModal.types.ts"

const DeleteUserModal = ({ open, onClose, onConfirm }: DeleteUserModalProps) => {
    return (
        <Modal 
            open={open}
            onClose={onClose}
        >
            <div>
                <p>Are you sure you want to delete?</p>
                <div>
                    <Button 
                        className="Button__Secondary"
                        onClick={onClose}
                    >No</Button>
                    <Button 
                        className="Button__Primary"
                        onClick={onConfirm}
                    >Yes</Button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteUserModal 
