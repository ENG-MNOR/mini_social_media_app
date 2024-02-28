import React from 'react'
import Login from './components/Login'
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';

function App() {  
  const [user,setUser]=useState("eng-mnor");
  const [posts,setPosts]=useState([]);

    useEffect(()=>{
     document.title = user? `${user}'s feed` : "please login"
    },[user])
   if(!user) return <Login setUser={setUser} />
  return (
    <div>
     <Header user={user} setUser={setUser}/>
     <CreatePost posts={posts} setPosts={setPosts}/>
     {
      posts.map(post =>(
        <>
        <p>{post.content}</p>
        {post.image && <img className="form-control h-50 m-3"  src={URL.createObjectURL(post.image)} alt="" style={{width:250}}
 />}</>
      ))
     }
    </div>
  )
}

export default App
