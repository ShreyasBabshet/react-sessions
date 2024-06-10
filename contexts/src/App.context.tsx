import { createContext, useState } from "react";

export const AppContext = createContext<any>({ text: '', setText: () => { } });
AppContext.Provider // Component
AppContext.Consumer // Component

export const AppProvider = ({ children }: any) => {
    const [text, setText] = useState("hi");

    return <AppContext.Provider value={{ text, setText: setText }}>
        {children}
    </AppContext.Provider>
}

