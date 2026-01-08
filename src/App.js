import React from 'react'

import { useState } from 'react'
import { LoginContext } from './context/Logincontext'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
    const [name,setName]=useState("")
    const [pwd,setPwd]=useState("")
    const [profileInfo,setProfileInfo]=useState(null)
 
  return (
    <div>
      <LoginContext.Provider value={{name,setName,pwd,setPwd,profileInfo,setProfileInfo}}>
      {profileInfo ? <Profile/> : <Login/>}
      </LoginContext.Provider>
      
    </div>
  )
}

export default App
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
