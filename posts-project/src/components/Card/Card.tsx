import styles from "./Card.module.scss"; 
import { CardProps } from "./Card.types.ts" 
 
const Card = ({children}: CardProps) => { 
    return (
        <div className={styles.Card}>
            {children}
        </div>
    )
} 
 
export default Card 
