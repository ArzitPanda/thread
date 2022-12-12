import React, { useCallback, useEffect, useState } from 'react'
import { getFirestore,getDocs, doc, collection, Query, query ,} from 'firebase/firestore'
import app from "../config/firebase"



const explore = () => {

const [count,setCount]=useState(1);
const db = getFirestore(app); 
const threadCollection = collection(db,'thread')
const [quotes,setQuotes]=useState([]);













  return (
    <div>bana heba dharjya dhara</div>
  )
}

export default explore