import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/Logincontext";


function Login() {
    const{setName,setProfileInfo}=useContext(LoginContext)
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
    <br></br>
    <input type="password" placeholder="Enter Password...."></input>
   <br></br>
   <input type="button" onClick={()=>setProfileInfo(true)} value='Login'></input>
    {/*{(profileinfo && "Valid User: "+name+"!") || "Invalid User!!!"}*/}
    </div>
  )
}

export default Login
