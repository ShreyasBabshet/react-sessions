import { MenuItem } from "./components/SideNav/SideNav.types";

export interface AppState {
    users: MenuItem[];
    isLoading: boolean;
}

export interface AppAction {
    type: "GET_USER_PENDING" | "GET_USER_SUCCESS" | "GET_USER_FAILED";
    data?: MenuItem[]
}