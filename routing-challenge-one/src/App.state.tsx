import { PropsWithChildren, createContext, useReducer } from "react";
import { AppAction, AppState } from "./App.types";

const initialState: AppState = {
    users: [],
    isLoading: false
};

const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case "GET_USER_PENDING":
            return { ...state, isLoading: true }
        case "GET_USER_SUCCESS":
            if (!action.data) return state;
            return { isLoading: false, users: action.data }
        case "GET_USER_FAILED":
            return { ...state, isLoading: false }
        default:
            return state;
    }
}

interface IAppContext { 
    state: AppState, 
    dispatch: React.Dispatch<AppAction>
    getUsers: () => void;
}

export const AppContext = createContext<IAppContext | null>(null);

// FACTORY PATTERN!
export const withAppProvider = (Component: () => JSX.Element) => {
    // Component = App

    // returning an inner component
    return () => (
        <AppProvider>
            <Component />
            {/* <App /> */}
        </AppProvider>
    );
}

export const AppProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const { getUsers } = withDispatch(dispatch);

    return (
        <AppContext.Provider value={{ state, dispatch, getUsers }} >
            {children}
        </AppContext.Provider>
    )
}

const withDispatch = (dispatch: React.Dispatch<AppAction>) => {
    const getUsers = async () => {
        try {
            dispatch({ type: "GET_USER_PENDING" });
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const users = await response.json();
            dispatch({ type: "GET_USER_SUCCESS", data: users });
        } catch (e) {
            dispatch({ type: "GET_USER_FAILED" })
        }
    }

    return {
        getUsers
    }
}
