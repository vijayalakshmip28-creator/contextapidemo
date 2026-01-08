import React from 'react'
import Login from './components/Login'
import { useState } from 'react'
import Profile from './components/Profile'
import { LoginContext } from './context/Logincontext'

function App() {
  const[name,setName]=useState("")
  const[profileinfo,setProfileInfo]=useState(false)
  return (
    <div>
      <LoginContext.Provider value={{name,setName,setProfileInfo}}>
      {profileinfo? <Profile/>: <Login/>}
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
