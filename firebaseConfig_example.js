import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

// get this values from your project settings in firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
// this is the path to your storage starting with gs://
export const storage = getStorage(app, "");