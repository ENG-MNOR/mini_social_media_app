const Header=({user,setUser})=>{
    // const logHandler=()=>{   
    //     console.log("clickeds")
    //     props.setUser();
     
    // }
    return <>
    <div className="bg-primary ">
        <div className="d-flex justify-content-between ">
            <h2 className="m-3 text-white">welcome {user}!</h2> 
            <button className="btn btn-success m-3" onClick={()=>setUser()}>logout</button>
        </div>
    </div>
    </>
}

export default Header;