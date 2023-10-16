// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, deleteObject } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpKIFJmCIGaCHZ7eeVpvHEc23tgsOD18M",
  authDomain: "kyawswarlynn-42d2f.firebaseapp.com",
  projectId: "kyawswarlynn-42d2f",
  storageBucket: "kyawswarlynn-42d2f.appspot.com",
  messagingSenderId: "1030485278479",
  appId: "1:1030485278479:web:7d8382a23e5860f78e887a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const deleteFile = async (img_url) => {
  const desertRef = ref(storage, img_url);
  deleteObject(desertRef).then(() => {
    console.log("image deleted")
  }).catch(error => {
    console.log("error deleting image")
  })
}