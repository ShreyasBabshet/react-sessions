import { useParams } from "react-router-dom";
import styles from "./ProfileDetails.module.scss"; 
import { ProfileDetailsProps } from "./ProfileDetails.types.ts" 
import { useContext } from "react";
import { AppContext } from "../../App.state.tsx";
 
const ProfileDetails = ({}: ProfileDetailsProps) => { 
    const { id } = useParams();
    const { state } = useContext(AppContext)!;

    const details = state.users.find(u => u.id == id);

    return <>{details?.id} { details?.name} </>
} 
 
export default ProfileDetails 
