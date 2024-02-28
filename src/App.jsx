import React, { useReducer } from 'react'
import Login from './components/Login'
import { useEffect,createContext,useContext } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList'; 
import postReducer from './postReducer';
export const userContext=createContext();
export const postContext=createContext({
  posts:[],
});

function App() {  
  const [user,setUser]=useState("eng-mnor");
  const [posts,setPosts]=useState([]);
  const initialPostState =useContext(postContext);
  const [state,dispatch]=useReducer(postReducer,initialPostState)

    useEffect(()=>{
     document.title = user? `${user}'s feed` : "please login"
    },[user])
   if(!user) return <Login setUser={setUser} />
  return (
    <postContext.Provider value={{state,dispatch}}>
    <userContext.Provider value={user}>
     <Header setUser={setUser}/>
     <CreatePost user={user} />
     <PostList posts={state.posts}/>
    
    </userContext.Provider>
    </postContext.Provider>
  )
}

export default App
