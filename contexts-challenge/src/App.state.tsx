import { createContext, useReducer } from "react";


const initialState: any = {
    text: ""
};

const appReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "SEND_TEXT":
            return { ...state, text: action.data }
        default:
            return state;
    }
}

export const AppContext = createContext<any>(null);


export const AppProvider = ({ children }: any) => {
    const state = useReducer(appReducer, initialState)
    
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}