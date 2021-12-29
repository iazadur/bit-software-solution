import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import initializeFirebaseApp from "../config/Firebase.init";

initializeFirebaseApp()

// import { AuthService } from "../Services/AuthServices"
const 
authContext = createContext();

const provider = new GoogleAuthProvider();



export function AuthProvider(props) {
    const [user, setUser] = useState("null")
    const [error, setError] = useState("")


    const loginWithGoogle = () => {
        signInWithPopup(getAuth(), provider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)

            });
    }

    const logout = () => {
        signOut(getAuth()).then(() => {
            setUser(null)
        }).catch((error) => {
            setError(error.message)
        });
    }

    const value = { user, error, loginWithGoogle, logout }

    return <authContext.Provider value={value} {...props} />
}