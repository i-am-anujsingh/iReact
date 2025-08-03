import React, {useContext} from 'react';
import UserContext from '../context/UserContext.js'

function Profile(){
   const {user} = useContext(UserContext)
   if(!user) return <div>Please Login!!</div>
   if(user.password==='@anuj') return (
    <div>Welcome {user.username || "Admin"}</div>
  )
  else return (<div className="text-red-500 text-xl">Wrong Password!!
  </div>)
}

export default Profile;