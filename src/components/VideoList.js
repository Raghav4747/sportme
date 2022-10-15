import React,{useState,useEffect} from 'react'
import { getStorage, ref, listAll,getDownloadURL  } from "firebase/storage";

export const VideoList = () => {

    const storage = getStorage();
    const listRef = ref(storage, 'files/');
    
    listAll(listRef)
    .then((res) => {
        res.prefixes.forEach((folderRef) => {
       
        });
        res.items.forEach((itemRef) => {
          
            const starsRef = ref(storage, 'files/'+ itemRef.name);
            getDownloadURL(starsRef)
                .then((url) => {
                    console.log(url)
                })
                .catch((error) => {
                });
        });
    }).catch((error) => {
    });

  return (
    <div className='mt-24'>
        
    </div>
  )
}
