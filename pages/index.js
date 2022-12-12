import { Avatar, Card, Container, Paper, Snackbar, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect, useRef } from 'react'
import Appbar from '../components/Appbar'
import TabBar from '../components/TabBar'
import styles from '../styles/Home.module.css'
import {Store} from "./_app"
import { exportComponentAsPNG } from 'react-component-export-image'
import {useContext} from "react";
import * as htmlToImage from 'html-to-image';
import { Check, DownloadOutlined, SaveAlt } from '@mui/icons-material'
import app from "../config/firebase"

import {getFirestore,collection,doc,addDoc} from "firebase/firestore"


export default function Home() {









const[resolution,setResolution] =useState({width:200,height:200})
const[color,setColor]=useState("#ffffff")
const[txtHeight,setTxtHeight]=useState(80)
const[txtWidth,setTxtWidth]=useState(0)
const[thread,setThread]=useState("");
const[boxColor,setBoxColor]=useState("#ffffff")
const[txtColor,setTxtColor]=useState("#000000")
const[weight,setWeight]=useState('normal');
const[txtAlign,setTxtAlign]=useState(0);
const[txtFamily,setTxtFamily]=useState('unset');
const[txtSize,setTxtSize]=useState(13);


const[isOpen,setIsOpen]=useState(false);
const  {isAuth,user} =useContext(Store);
const cardRef =useRef()


const storeF =getFirestore(app);
const UserCollection= collection(storeF,'user');
const ThreadCollection= collection(storeF,'thread');
const[message,setMessage]= useState("sign in first");


const savePhoto =async ()=>{
  if(isAuth)
  {
    try{
      const data =await addDoc(ThreadCollection,{
    
        ...user,
        color,
        txtHeight,
        txtWidth,
        thread,
      
      boxColor,
      txtColor,
      weight,
      txtAlign,
      txtFamily,
      txtSize
      
      
      
      
      });

      setMessage("sucessfully save");
      setIsOpen(true)
    }
    catch(error)
    {
      console.log(error)
    }
  } 
  else
  {
    setIsOpen(true);
  }



}









const downloadPhoto=async ()=>{

const fileName= thread.split(thread.length-(thread.length*.8))+user.name;

if(isAuth)
{
  const dataUrl = await htmlToImage.toPng(cardRef.current);
 
  // download image
  const link = document.createElement('a');
  link.download = fileName+".png";
  link.href = dataUrl;
  link.click();
}
else
{
setIsOpen(true)
}


}

  return (
    <div >
      <Snackbar
      
        anchorOrigin={{horizontal:'right',vertical:'top'}}
        open={isOpen}
        message={message}
        onClose={(e)=>setIsOpen(false)}
        autoHideDuration={5000}
      
      />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar/>

      <div
      style={{
        height:600
      }}
      >
     <center
    
     >
      <div style={{backgroundColor:'#FF5733',padding:3}}>
     <div 
      id='card'
      ref={cardRef}
      style={{
        width:resolution.width,
        height:resolution.height,
        borderRadius:0,
        backgroundColor:color,
      marginTop:10,
      // boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        // overflow: 'scroll',
        
        display:'flex',
        alignItems: 'center',
        justifyContent:'center'
       
          
        
      }} >
          <div
          
          
          style={{
            width:"70%",
            backgroundColor:boxColor,
            color:txtColor,
           
            marginTop:txtHeight,
            marginLeft:txtWidth,
            padding:10,
            display:'flex',
          
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center',
           

          }}
          
          >
            <div style={{
              display:'flex',
              flexDirection:'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight:40,
              marginBottom:5,
              columnGap:7
            }}>
        <Avatar sx={{height:25,width:25}} src={user.photoURL}>{!isAuth && `a`}</Avatar>
        <Stack spacing={-0.4}>
        <Stack spacing={-0.6} sx={{textAlign:"left",}}>
        <Typography variant="subtitle1" fontSize={9}>{user.name}</Typography>
        <Typography variant="subtitle2" fontSize={8} >{user.userName}</Typography>
        </Stack>
        
        </Stack>
        </div>
        <div style={{textAlign:'left'}}>
          <Typography variant="h5" fontSize={txtSize} 
          
          sx={{
            textAlign:'left',
            width:'100%',
       lineHeight:0.9,
       fontWeight:weight,
       marginRight:txtAlign,
       fontFamily:txtFamily
          }}
          >{thread}</Typography>
        </div>
        </div>

    
      </div>
      </div>
     </center>
     <Container sx={{display:'flex',alignItems: 'center',justifyContent: 'center',marginTop:5,borderRadius:10,
     
     
     
     
     }}>
      <div
      style={{
        display:'flex',alignItems: 'center',justifyContent: 'center',marginTop:5,borderRadius:10,
        padding:5,
        cursor:'pointer',
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        zIndex:10,
        position: 'absolute',
        right:10,
        top:70,
      }}
      
      
      onClick={downloadPhoto}
      
      
      >
      <DownloadOutlined color='disabled'/>
      </div>
      <div



        onClick={savePhoto}

      style={{
        display:'flex',alignItems: 'center',justifyContent: 'center',marginTop:5,borderRadius:10,
        padding:5,
        cursor:'pointer',
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        zIndex:10,
        position: 'absolute',
        right:10,
        top:120,
      }}
      
      
      
      
      
      >
      <Check color='disabled'/>
      </div>
     </Container>
     </div>





      <TabBar resolution={resolution} setResolution={setResolution}
      color={color} setColor={setColor}

              altcolor={{setBoxColor,setTxtColor}}

      txt={{thread,setThread,setWeight,setTxtAlign,setTxtFamily,txtFamily,setTxtSize}}
      textHeight={{txtHeight,setTxtHeight,txtWidth,setTxtWidth}}
      
      
      />
    </div>
  )
}
