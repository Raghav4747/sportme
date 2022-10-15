import React,{useState} from 'react';
import { auth } from '../service/firebase'
import '../App.css';

import { storage } from '../service/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { VideoList } from './VideoList';

export const Home = ({ user }) => {

    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('dl',downloadURL)
              setImgUrl(downloadURL)
            });
          }
        );
    }

  return (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <div className="App">
        <form onSubmit={handleSubmit} className='form'>
            <input type='file' />
            <button type='submit'>Upload</button>
        </form>
        {
            !imgUrl &&
            <div className='outerbar'>
            <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
            </div>
        }
        {
            imgUrl &&
            <img src={imgUrl} alt='uploaded file' height={200} />
        }
        </div>
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
      <VideoList />
    </div>
  )
}