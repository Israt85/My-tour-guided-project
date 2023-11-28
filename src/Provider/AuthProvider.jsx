import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import useaxiosPublic from "../Hooks/useaxiosPublic";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loading, setLoading] = useState(false)
    const provider = new GoogleAuthProvider();
    
    const auth = getAuth(app);
    const axiosPublic= useaxiosPublic()

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
           if(currentUser){
            const userInfo = {email : currentUser.email}
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
               if(res.data.token){
                localStorage.setItem('access-token', res.data.token)
               }
            })
           }
           else{
            localStorage.removeItem('access-token')
           }

            
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[auth,axiosPublic])
    const updateUserProfile= (name,photourl) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photourl

        })
    }
    const userLogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const authInfo = {
          user,
          loading,
          userRegister,
          userLogin,
          updateUserProfile,
          userLogOut,
          googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;