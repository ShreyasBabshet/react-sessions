import { MouseEvent } from "react";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types.ts"

const Modal = ({ children, open, onClose = () => undefined }: ModalProps) => {

    const handleOnClose = (e: MouseEvent) => {
        if(e.currentTarget === e.target) {
            onClose();
        }
    }


    if(!open) return null;

    return (
        <div 
            className={styles.Modal__Overlay}
            onClick={handleOnClose}
        >
            <div className={styles.Modal__Content}>
                <span 
                    className={styles.Modal__Close}
                    onClick={onClose}
                >x</span>
                {children}
            </div>
        </div>
    )
}

export default Modal;
