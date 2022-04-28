// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBJmBS5xmfHH6OprI4Xx6evLEBo5nK02sE",
  authDomain: "genius-car-services-fd24f.firebaseapp.com",
  projectId: "genius-car-services-fd24f",
  storageBucket: "genius-car-services-fd24f.appspot.com",
  messagingSenderId: "220191295723",
  appId: "1:220191295723:web:a13825490bf99f4bdb16ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
