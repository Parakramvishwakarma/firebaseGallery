import React, { useEffect, useState } from 'react';
import { projectFireStore } from '../firebase/config';
import { collection, query, where, getDocs, orderBy, onSnapshot } from "firebase/firestore";



const useFireStore = (collectionName : string ) => {
    const [docs, setDocs] = useState<Image[]>([]);

    const getData =  () => {
        const q = query(collection(projectFireStore, collectionName), orderBy("createdAt", "desc") )
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let dataArr: any[] =[];
            querySnapshot.forEach((doc) => {
                dataArr.push({...doc.data(),id: doc.id});
            });
            setDocs(dataArr); 
        });
        return unsubscribe;
    }


    useEffect(()=> {
        const unsub = getData();
        return () => unsub();
    }, [collection])

    return {docs}
} 


export default useFireStore;