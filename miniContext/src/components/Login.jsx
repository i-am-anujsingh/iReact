import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext.js'

function Login(){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const {setUser} = useContext(UserContext)
  
const handleSubmit=(e)=>{
  e.preventDefault()
  setUser({username,password})
}

  return (
    <div className="bg-gray-300 h-42 p-2">
      <h2 className="">Login Page</h2>
      <input
      className="rounded-xl p-1.5 m-2 border-solid border-2 border-black"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      type="text"
      placeholder="username"/>
      <input
      className="rounded-xl p-1.5 m-2 border-solid border-2 border-black"
      value={password}
       onChange={(e)=>setPassword(e.target.value)}
      type="Password" 
      placeholder="password"
      required /><br/>
      <button className="rounded-xl p-1.5 m-2 border-solid border-2 border-black" onClick={handleSubmit}>Submit</button>
    </div>
  )
}


export default Login