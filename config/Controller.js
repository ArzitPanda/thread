import {getAuth,TwitterAuthProvider,signInWithPopup} from 'firebase/auth';
import app from './firebase';
 


export const signIn =(app,context)=>{


const auth =getAuth(app);
const provider= new TwitterAuthProvider();

signInWithPopup(auth,provider).then((data)=>{


console.log(data);
context.isAuth(true);


}).catch(err=>console.log(err));


}