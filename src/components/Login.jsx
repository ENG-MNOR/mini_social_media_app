import { useState } from "react"

const Login=(props)=>{
    const [username,setUsername]=useState();
    const handleSubmit=(Event)=>{
        Event.preventDefault();
        props.setUser(username);
    }
  return <>
  <div className="d-flex justify-content-center align-items-center bg-primary vh-100" >
    <div className="bg-white w-50 rounded p-3">
        <form 
        onSubmit={handleSubmit} >
            <h1 >log in</h1>
            <input type="text" placeholder="Username" className="form-control"
            onChange={(event)=>setUsername(event.target.value)} /><br/>
          <button type="submit" className="btn btn-primary form-control">Login</button>
          </form>
        
    </div>
  </div>
</>  
}
export default Login