import './App.css';
import { Login } from './components/Login';
import { useState, useEffect } from 'react';
import firebase from './service/firebase';
import {Home} from './components/Home';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])
  return (
    <div>
      {user ? <Home user={user}/> : <Login />}
    </div>
  );
}

export default App;
