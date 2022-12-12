import {getAuth,TwitterAuthProvider,signInWithPopup,signOut} from 'firebase/auth';
import app from './firebase';



export const signIn =(app,context)=>{


const auth =getAuth(app);
const provider= new TwitterAuthProvider();

signInWithPopup(auth,provider).then((data)=>{


console.log(data.user);

context.setUser({

uid:data.user.uid,
name:data.user.displayName,
photoURL:data.user.photoURL,
userName:data.user.reloadUserInfo.screenName,


})



context.setIsAuth(true);




}).catch(err=>console.log(err));


}



export  const signOutCustom =(app,context) =>{
    const auth =getAuth(app);

signOut(auth).then((data)=>{

context.setIsAuth(false);
context.setUser({
   
});

}).catch((err)=>{
    console.log(err);
})


}