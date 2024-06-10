import { useState } from "react";
import Card from "../Card/Card.tsx";
import styles from "./Post.module.scss";
import { PostProps } from "./Post.types.ts"
import commentService from "../../services/comment.service.ts";
import Comment from "../Comment/Comment.tsx";
import { IComment } from "../Comment/Comment.types.ts";
import Loader from "../Loader/Loader.tsx";

const Post = ({ title, body, id }: PostProps) => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [showLoader, setShowLoader] = useState(false);

    const onShowComments = async () => {
        if(comments.length) return;
        setShowLoader(true);
        const commentsData = await commentService.getComments(id);
        setComments(commentsData);
        setShowLoader(false);
    }

    return (
        <div style={{ position: "relative" }}>
            {showLoader && <Loader />}
            <Card>
                <h2>{title}</h2>
                <p>{body}</p>

                <button onClick={onShowComments}>show comments</button>

                {
                    comments.length > 0 && comments.map(comment => {
                        return <Comment
                            body={comment.body}
                            email={comment.email}
                        />
                    })
                }
            </Card>
        </div>
    )
}

export default Post 
