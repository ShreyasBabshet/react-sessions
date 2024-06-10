import Four from "../Four/Four.tsx";
import styles from "./Two.module.scss"; 
import { TwoProps } from "./Two.types.ts" 
 
const Two = ({}: TwoProps) => { 
    return (
        <div className={styles.Two}>
            <Four />
        </div>
    )
} 
 
export default Two 
