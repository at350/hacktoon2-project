import React from 'react';
import './App.css';
import styled from 'styled-components';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {useAuthState} from 'react-firebase-hooks/auth';

firebase.initializeApp({
    apiKey: "AIzaSyBlagOfcAu-tk4WUA9tHMturgNim-Ydk_Y",
    authDomain: "hacktoon2.firebaseapp.com",
    projectId: "hacktoon2",
    storageBucket: "hacktoon2.appspot.com",
    messagingSenderId: "1072869583781",
    appId: "1:1072869583781:web:28dbc4ecfd4ded9c30164c",
    measurementId: "G-63GD850E6D"
})

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
  
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <SignOut />
      <header className="App-header">
      {user ? <Game /> : <SignIn />}

      </header>


    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <SignInButton onClick={signInWithGoogle}>Sign in with Google</SignInButton>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function Game() {

}

export default App;



const SignInButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
`