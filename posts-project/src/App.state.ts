import { Dispatch } from "react";
import { AppAction, AppState } from "./App.types";
import postService from "./services/post.service";

export const initialState: AppState = {
    posts: [],
    showLoader: false
}

export const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "GET_POST_PENDING":
            return { ...state, showLoader: true }
        case "GET_POST_SUCCESS":
            return { ...state, showLoader: false, posts: action.data }
        case "GET_POST_FAILED":
            return { ...state, showLoader: false }
        default:
            return state;
    }
}

export const withDispatch = (dispatch: Dispatch<AppAction>) => {
    
    const getPosts = async () => {
        try {
            dispatch({ type: "GET_POST_PENDING" });
            const posts = await postService.getPosts()
            dispatch({ type: "GET_POST_SUCCESS", data: posts });
        } catch (e) {
            dispatch({ type: "GET_POST_FAILED" });
        }
    }

    return {
        getPosts
    }
}