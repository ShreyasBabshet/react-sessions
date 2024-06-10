import styles from "./Comment.module.scss"; 
import { CommentProps } from "./Comment.types.ts" 
 
const Comment = ({body, email}: CommentProps) => { 
    return <div className={styles.Comment}>
        <p>{body}</p>
        <p className={styles.Email}>{email}</p>
    </div>
} 
 
export default Comment 
