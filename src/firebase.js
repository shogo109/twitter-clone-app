import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBT5cF0bxUTLPfVbJQLsB2a4x1OOZy_Ci0",
    authDomain: "twitter-clone-udemy-ca8b6.firebaseapp.com",
    projectId: "twitter-clone-udemy-ca8b6",
    storageBucket: "twitter-clone-udemy-ca8b6.appspot.com",
    messagingSenderId: "830425047013",
    appId: "1:830425047013:web:16ac652f3a93d5d25e990c"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db;