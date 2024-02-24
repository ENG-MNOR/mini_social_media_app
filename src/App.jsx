import React from 'react'
import Login from './components/Login'
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

function App() {  
  const [user,setUser]=useState("eng-mnor");

    useEffect(()=>{
     document.title = user? `${user}'s feed` : "please login"
    },[user])
   if(!user) return <Login setUser={setUser} />
  return (
    <div>
     <Header user={user} setUser={setUser}/>
     <CreatePost/>
    </div>
  )
}

export default App
