import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/Logincontext'
function Profile() {
    const{ name } =useContext(LoginContext)
  return (
    <div>
      <h2>This is profile page</h2>
      <h2>welcome!!! {name}</h2>
    </div>
  )
}

export default Profile