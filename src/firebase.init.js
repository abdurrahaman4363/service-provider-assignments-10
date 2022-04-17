// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN212qA3pTc8SX6jfqV94nSkOo5d-F_lU",
  authDomain: "service-provider-assign-10.firebaseapp.com",
  projectId: "service-provider-assign-10",
  storageBucket: "service-provider-assign-10.appspot.com",
  messagingSenderId: "660731427825",
  appId: "1:660731427825:web:71cb8a43fb90058579a250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;