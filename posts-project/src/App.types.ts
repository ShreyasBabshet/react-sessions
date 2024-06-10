import { Post } from "./components/Post/Post.types";

export interface AppState {
    posts: Post[]
    showLoader: boolean;
}

const AppActions = {
    GET_POST_PENDING: "GET_POST_PENDING",
    GET_POST_SUCCESS: "GET_POST_SUCCESS",
    GET_POST_FAILED: "GET_POST_SUCCESS"
}

export interface AppAction {
    type: keyof typeof AppActions;
    data?: any;
}

interface Action<T, D=null> {
    type: keyof T;
    data: D
}