export interface Post {
    id: string;
    userId: string;
    title: string;
    body: string;
}
export interface PostProps extends Pick<Post, "title" | "body" | "id"> {} 
