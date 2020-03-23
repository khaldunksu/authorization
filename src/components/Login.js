import React,{useState} from 'react';
import Fire from './Fire';
const Login =()=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const handleEmailChange = (event) => {
     setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
     setPassword(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    Fire.auth().signInWithEmailAndPassword(email,password)
    .then(user=>{})
    .catch(error=>{
      console.log(error)
    });

  }
 
    return (
      <div className="login">
        <form class="ui form" onSubmit={submitHandler}>
          <div class="field">
            <label>Username</label>
            <input type="text" name="first-name" placeholder="Username" onChange={handleEmailChange} value={email}/>
          </div>
          <div class="field">
            <label>Password</label>
            <input
             name="last-name"
              placeholder="Password"
              type="password" 
              value={password}
              onChange={handlePasswordChange}/>
          </div>
          <button class="ui button" type="submit">Log in</button>
        </form>
      </div>

    )
  }

export default Login 