
import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/Logincontext";


function Login() {
    const{name,setName,pwd,setPwd,profileInfo,setProfileInfo}=useContext(LoginContext)
  //  const [name,setName]=useState("")
   // const [pwd,setPwd]=useState("")
   // const [profileInfo,setProfileInfo]=useState(false)
      const show=()=>
      {
        if(name==="Viji" && pwd==="asdf,123")
          setProfileInfo(true)
        else
          setProfileInfo(false)
      }
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
    <br></br>
    <input type="password" onChange={(e)=>setPwd(e.target.value)} placeholder="Enter Password...."></input>
   <br></br>
   <input type="button" onClick={()=>show()} value='Login'></input>
    <br></br>
    {profileInfo===false && <font color='red' size='7'><u>Invalid User!?</u></font>}
    
    </div>
  )
}

export default Login
