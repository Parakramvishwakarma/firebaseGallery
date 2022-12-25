import React, {useState, useEffect} from "react";
import { projectStorage } from "../firebase/config";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";



const useStorage = (file : File ) => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<string | undefined>(undefined);
    const [url, setUrl] = useState<string | undefined>(undefined);
    useEffect( () => {
        // references 
        const storageRef = ref(projectStorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file,  {contentType: file.type});
        uploadTask.on('state_changed',
        (snapshot) => {
                setProgress(snapshot.bytesTransferred/ snapshot.totalBytes * 100);
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log("Upload is running")
                        break;
                }
        },
        (error) => {
            setError(error.message);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
                console.log('File available at', downloadURL);
                setUrl(downloadURL);
            });
        }) 
    }, [file]) 
    return {progress, url , error}
}


export default useStorage;