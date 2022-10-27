import React, { useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const Auth = () => {
  const {email, setEmail} = useState("");
  const {password, setPassword} = useState("");
  const [newAccount, setNewAccount] = useState(true);
  
  const onChange = (e) => {
    const {target: {name, value}} = e;
    if(name === 'email') {
      setEmail(value);
    } else if(name === 'password') {
      setPassword(value);
    }
  }
  const onSubmit =  async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(
          email,
          password
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name="email" type="email" placeholder="Email" required value={email} />
        <input onChange={onChange} name="password" type="password" placeholder="Password" required value={password} />
        <input type="submit" value={newAccount ? "Create Account" : "Login"}/>
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth;