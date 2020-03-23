import React from 'react';
import Fire from './Fire'
const Profile=()=>{
    const Logout =()=>{
        Fire.auth().signOut()

    }
    return(
        <div>
     <h2>Welcome to Profile page!</h2>
     <button class="negative ui button" type="submit" onClick={Logout}>Logout</button>
     </div>
    )
}
export default Profile