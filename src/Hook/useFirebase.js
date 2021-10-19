// import FirebaseInit from "../Firebase/Firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, updateProfile
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
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                setError("");
            })
            .finally(() => setIsLoading(false));

        // .try((error) => setError(error.message));
    };

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setError("");
            })
            .catch((error) => setError(error.message));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // const uid = user.userId;
            } else {
                setUser({});
                // User is signed out
                // ...
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, [auth]);

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
        // .catch((error) => {
        //     setError(error);
        // });
    };

    const handleUserRegister = (email, password, name) => {
        if (name.length < 3) {
            setError('Please enter your name with greater than character')
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least Six characters')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain two special case letter')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                setError('');
                setUserName();
            })
            .catch((error) => {
                setError(error.message);
                // const errorMessage = error.message;
            });
    };

    // set name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                // Profile updated!
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    // for login
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
                return;
                // const errorMessage = error.message;
            });
        // .finally(() => setIsLoading(false));
    };

    return {
        handleGoogleLogin,
        user,
        handleGithubLogin,
        handleLogout,
        handleUserRegister,
        handleUserLogin,
        name,
        setName,
        isLoading,
        error
    };
};

export default useFirebase;