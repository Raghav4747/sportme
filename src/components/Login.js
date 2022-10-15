import React from 'react'
import { signInWithGoogle } from '../service/firebase';

export const Login = () => {
  return (
    <div>
        <button onClick={signInWithGoogle}>
            Login using Google
        </button>
    </div>
  )
}
