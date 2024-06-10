import { User } from "../../App.types";

 export interface EditUserModalProps {
    open: boolean;
    onClose: () => void;
    user: User | null;
    onSubmit: (user: User) => void;
 } 
