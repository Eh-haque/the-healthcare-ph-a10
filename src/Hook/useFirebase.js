// import FirebaseInit from "../Firebase/Firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

// FirebaseInit();
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                // console.log(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
    };

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // const uid = user.uid;
            } else {
                // User is signed out
                // ...
            }
        });
    }, [auth]);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
                // const errorMessage = error.message;
            });
    };

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
                // const errorMessage = error.message;
            });
    };

    return {
        handleGoogleLogin,
        user,
        handleGithubLogin,
        handleLogout,
        handleUserRegister,
        handleUserLogin,
        error
    };
};

export default useFirebase;