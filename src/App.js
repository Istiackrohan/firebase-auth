import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => { setUser(currentUser) });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">

      <h1>Register User</h1>
      <input
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
        placeholder="Email"></input>
      <input
        placeholder="Password"
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      ></input>
      <button onClick={register}>Create User</button>

      <h3>Login</h3>
      <input
        placeholder="Email"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <input
        placeholder="Password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
      <button onClick={login}>Login</button>

      <p>User Email: {user?.email}</p>
      <button onClick={logout}>Sign Out</button>

      <h1>Login with Gmail</h1>
      <button>Your gmail</button>
    </div>
  );
}

export default App;
