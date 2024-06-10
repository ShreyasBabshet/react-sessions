import { createContext, Component, PropsWithChildren, useState, useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface IAuthContext {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<IAuthContext | null>(null);

const useAuth = () => useContext(AuthContext)!;

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export const withAuthProvider = (C: typeof Component | React.FC) => {
    return () => (
        <AuthProvider>
            <C />
        </AuthProvider>
    )
}

export const withAuth = (C: typeof Component | React.FC) => {
    return () => {
        const { isLoggedIn } = useAuth();
        const location = useLocation();
        
        // EXAMPLE WITHOUT useNavigate hook
        // const navigate = useNavigate()
        // useEffect(() => {
        //     if (!isLoggedIn) navigate("/login", {
        //         state: { from: location },
        //         replace: true
        //     })
        // }, []);

        return isLoggedIn ? <C /> : <Navigate to="/login" state={{ from: location }} replace/>
    }
}