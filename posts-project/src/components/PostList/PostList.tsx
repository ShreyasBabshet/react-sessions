import Post from "../Post/Post.tsx";
import styles from "./PostList.module.scss"; 
import { PostListProps } from "./PostList.types.ts" 
 
const PostList = ({posts}: PostListProps) => { 
    return (
        <>
            {
                posts.map(post => {
                    return <Post 
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        id={post.id}
                    />
                })
            }
        </>
    )
} 
 
export default PostList 
