import { useState,useRef } from "react";

const CreatePost =({posts,setPosts})=>{
    const [content,setContent]= useState("")
    const [image,setimage]= useState(null)
    const imageRef=useRef();
    const contentRef=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newPost={content,image}
        setPosts([newPost,...posts])
        setContent("")
        imageRef.current.value="";
        setimage(null);
        contentRef.current.focus();
    }
return <>
{/* className="bg-primary d-flex vh-100 justify-content-center align-items-center" */}
<div >
    {/* className="bg-white p-3 rounded h-100 w-50 align-items-center mt-5 mb-5" */}
<div >
<form onSubmit={handleSubmit} className="">
    {/* className="ms-5"  */}
    <h2 >create post</h2>
    <input type="text" placeholder="enter the content" className="form-control mb-3" ref={contentRef} onChange={(e)=>setContent(e.target.value)} value={content}/>
    <input type="file" onChange={(e)=>setimage(e.target.files[0])} className="form-control mb-3" ref={imageRef}/>
    <button type="submit" className="btn btn-info ">Create</button>
    {/* <div className=""> */}
{/* <p className="m-4">{content}</p>
{image && <img className="form-control h-50 m-3"  src={URL.createObjectURL(image)} alt="" style={{width:250}}
 />}</div> */}
 </form>

</div>
</div>

</>
};

export default CreatePost;