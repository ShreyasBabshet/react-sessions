import { Dispatch } from "react";
import { Action, AppState, User } from "./App.types";
import { deleteUserAPI, getUsersAPI, updateUserAPI } from "./services/user.service";

export const initialState: AppState = {
    rows: [],
    showLoader: false,
    selectedUser: null,
    showDeleteModal: false,
    showEditModal: false,
    pageNumber: 0,
    pageSize: 10
}

export const appReducer = (state: AppState, action: Action): AppState => {
    const { rows, pageNumber, pageSize } = state;
    switch (action.type) {
        case "GET_USERS_PENDING":
            return { ...state, showLoader: true }
        case "GET_USERS_COMPLETE":
            return { ...state, showLoader: false, rows: action.data }
        case "GET_USERS_FAILED":
            return { ...state, showLoader: false }
        case "DELETE_USER_PENDING":
            return { ...state, showLoader: true }
        case "DELETE_USER_COMPLETE":
            const updatedRows = rows.filter(row => row.id !== action.data);
            return { ...state, showLoader: false, rows: updatedRows, selectedUser: null }
        case "DELETE_USER_FAILED":
            return { ...state, showLoader: false, selectedUser: null }
        case "SHOW_DELETE_MODAL":
            return { ...state, showDeleteModal: true, selectedUser: action.data }
        case "HIDE_DELETE_MODAL":
            return { ...state, showDeleteModal: false, selectedUser: null }


        case "EDIT_USER_PENDING":
            return { ...state, showLoader: true }
        case "EDIT_USER_COMPLETE":
            const editedUsers = rows.map(row => row.id !== state.selectedUser!.id ? row : action.data);
            return { ...state, showLoader: false, rows: editedUsers, selectedUser: null }
        case "EDIT_USER_FAILED":
            return { ...state, showLoader: false, selectedUser: null }
        case "SHOW_EDIT_MODAL":
            return { ...state, showEditModal: true, selectedUser: action.data }
        case "HIDE_EDIT_MODAL":
            return { ...state, showEditModal: false, selectedUser: null }


        case "NEXT_PAGE":
            const maxPageNumber = Math.floor(rows.length / pageSize);
            if (pageNumber === maxPageNumber) return state;
            return { ...state, pageNumber: pageNumber + 1 }
        case "PREV_PAGE":
            if(pageNumber === 0) return state;
            return { ...state, pageNumber: pageNumber + 1 }
        case "PAGE_SIZE_CHANGE":
            return { ...state, pageSize: action.data }

        default:
            return state;
    }

}


// ACTION FUNCTIONS
export const getUsers = async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: "GET_USERS_PENDING" });
        const users = await getUsersAPI();
        dispatch({
            type: "GET_USERS_COMPLETE",
            data: users
        })
    } catch (e) {
        dispatch({ type: "GET_USERS_FAILED" });
    }
}

export const deleteUser = async (dispatch: Dispatch<Action>, id: number) => {
    try {
        dispatch({ type: "DELETE_USER_PENDING" });
        await deleteUserAPI(id);
        dispatch({
            type: "DELETE_USER_COMPLETE",
            data: id
        })
    } catch (e) {
        dispatch({ type: "DELETE_USER_FAILED" });
    }
}

export const editUser = async (dispatch: Dispatch<Action>, user: User) => {
    try {
        dispatch({ type: "EDIT_USER_PENDING" });
        await updateUserAPI(user);
        dispatch({
            type: "EDIT_USER_COMPLETE",
            data: user
        })
    } catch (e) {
        dispatch({ type: "EDIT_USER_FAILED" });
    }
}