import { createContext, useContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UserContext = createContext('');

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    const auth = getAuth();

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser({
                id: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email
            });
        } else {
            setUser(null);
        }
    });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;