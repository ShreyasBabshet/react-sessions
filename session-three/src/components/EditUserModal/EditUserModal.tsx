import { FormEvent } from "react";
import Button from "../Button/Button.tsx";
import Modal from "../Modal/Modal.tsx";
import styles from "./EditUserModal.module.scss"; 
import { EditUserModalProps } from "./EditUserModal.types.ts" 
 
const EditUserModal = ({ open, onClose = () => {}, user, onSubmit }: EditUserModalProps) => { 
    
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: any = {};
        
        for(let [key, value] of formData.entries()) {
            data[key] = value;
        }

        onSubmit(data);
    }

    if(!user) return null;
    return (
        <Modal 
            open={open}
            onClose={onClose}
        >
            <section>
                <h2>Edit User</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" defaultValue={user.name} name="name" />
                    </div>

                    <div>
                        <input type="text" defaultValue={user.email} name="email"/>
                    </div>

                    <div>
                       <Button className="Button__Primary">Submit</Button>
                    </div>
                </form>
            </section>
        </Modal>
    )
} 
 
export default EditUserModal 
