import '../styles/globals.css'
import {createContext,useEffect,useState} from 'react';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import app from "../config/firebase";
export const Store =createContext();


function MyApp({ Component, pageProps }) {


const[isAuth,setIsAuth]=useState(false)
const[user,setUser]=useState({});

const auth =getAuth(app);

useEffect(()=>{

onAuthStateChanged(auth,(user1)=>{
  if(user1){
      setIsAuth(true);
      setUser({

        uid:user1.uid,
        name:user1.displayName,
        photoURL:user1.photoURL,
        userName:user1.reloadUserInfo.screenName,
        
        
        })
 

  }
  else
  {
    setIsAuth(false);
  }



})




},[])





        return  (<Store.Provider value={{isAuth,setIsAuth,user,setUser}}>
 <Component {...pageProps} />
  </Store.Provider>)
}

export default MyApp
