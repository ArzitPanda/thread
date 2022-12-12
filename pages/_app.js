import '../styles/globals.css'
import {createContext,useState} from 'react';

export const Store =createContext();


function MyApp({ Component, pageProps }) {


const[isAuth,setIsAuth]=useState(false)
const[user,setUser]=useState({});


        return  (<Store.Provider value={{isAuth,setIsAuth,user,setUser}}>
 <Component {...pageProps} />
  </Store.Provider>)
}

export default MyApp
