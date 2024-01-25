import { collection,getDocs } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js"
import { useEffect,useState } from "react";
import { db } from "./FBKeys.js"

export const getProducts = () => {
    const [products, setProducts] = useState([])

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db,'productos'));
            const docs =[];
            querySnapshot.forEach(doc => {
               docs.push({...doc.data()})
            });
           setProducts(docs)
       } catch (error) {
           console.log(error)
       }
    }

    useEffect(() => {
        getData()
    }, [])
    
    return{products};
    
}
