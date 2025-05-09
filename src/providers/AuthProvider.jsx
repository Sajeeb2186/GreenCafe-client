import { useEffect, useState } from "react";
import { createContext } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";



export const AuthContext = createContext(null);

const auth=getAuth(app);


export default function AuthProvider({children}) {
  

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

     const createUser=(email,password)=>{
       
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
     }
      const signIn=(email,password)=>{
          setLoading('true');
          return signInWithEmailAndPassword(auth,email,password);
      }

      const logOut=()=>{
          setLoading(true);
          return signOut(auth);
      }


      const updateUserProfile=(name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        })
      }




     useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
     },[])



    const authInfo={

        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,

    }


  return (
    <AuthContext.Provider value={authInfo}>

        

  {children}



    </AuthContext.Provider>
  )
}
