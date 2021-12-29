import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initFirebaseAuthentication from "../Firebase/Firebase.init"
initFirebaseAuthentication()

const auth = getAuth();

const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)



    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })

    }, [])
    

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                swal("Logout Successful!", "You are logged out!", "success");
            })
            .finally(() => setIsLoading(false))
    }


    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        setIsLoading,
        isLoading,
        setError,
        setUser,

    }
}

export default useFirebase




































