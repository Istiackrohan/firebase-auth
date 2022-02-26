import { useEffect, useState } from 'react';
import initializeAuthentication from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                const user = result.user
                setUser(user);
            }).catch((error) => {
                setError(error.message)
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    return {
        error,
        user,
        signInWithGoogle,
        logout
    }
};

export default useFirebase;