import { useState } from "react";

const CreatePost =()=>{
    const [content,setContent]= useState("")
    const [image,setimage]= useState(null)
return <>
<h2>create post</h2>
<form>
    <input type="text" placeholder="enter the content" onChange={(e)=>setContent(e.target.value)} />
    <input type="file" onChange={(e)=>setimage(e.target.files[0])} />
    <button type="submit" className="btn btn-info">Create</button>
</form>
<h2>{content}</h2>
{image && <img src={URL.createObjectURL(image)} alt="" style={{width:500}}
 />}
</>
};

export default CreatePost;