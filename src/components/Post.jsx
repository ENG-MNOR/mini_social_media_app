import { useContext } from "react";
import { postContext, userContext } from "../App";
const Post=({content,image,user,id})=>{
    const userCon= useContext(userContext)
    const {dispatch}=useContext(postContext);
    
    const handleDelete=()=>{
        // console.log(id)
        if(!window.confirm('Are you sure you want to delete'))
        return;
       dispatch({type:"DELETE_POST",payload:{delId:id}});
    


    }
    console.log(userCon)
    let currUser=userCon==user;
    return (
        <>
              <p>{content}</p>
              {image && <img className="form-control h-50 m-3"  src={URL.createObjectURL(image)} alt="" style={{width:200}}
              
       />}
       {user && <p style={{color:currUser && "green"}}>{user}</p>
       }
       {currUser && <button className="btn btn-danger" onClick={handleDelete}>Delete</button>}
       </>
    )
}
export default Post