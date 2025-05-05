import { useEffect, useState } from "react";
import { createContext } from "react";
import {  getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";



export const AuthContext = createContext(null);

const auth=getAuth(app);


export default function AuthProvider({children}) {
  

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

     const createUser=(email,password)=>{
       
        set
        return auth.createUserWithEmailAndPassword(email,password);
     }
      const signIn=(email,password)=>{
          return auth.signInWithEmailAndPassword(email,password);
      }

      const logOut=()=>{
          setLoading(true);
          return signOut(auth);
      }




     useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((currentUser)=>{
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

    }


  return (
    <AuthContext.Provider value={authInfo}>

        

  {children}



    </AuthContext.Provider>
  )
}
