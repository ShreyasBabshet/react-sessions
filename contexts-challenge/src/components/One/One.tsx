import Three from "../Three/Three.tsx";
import styles from "./One.module.scss"; 
import { OneProps } from "./One.types.ts" 
 
const One = ({}: OneProps) => { 
    return (
        <div className={styles.One}>
            <Three />
        </div>
    )
} 
 
export default One 
