import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// as the actual value you want toaccess
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
        
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}