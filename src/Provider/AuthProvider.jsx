import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loading, setLoading] = useState(false)
    const auth = getAuth(app);



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
          loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;