import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app);

    const userRegister = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setuser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[auth])

    const authInfo = {
          user,
          loading,
          userRegister,
          userLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;