import Firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyA0P0-Yr_A6TTrH46phvuA0vyb_SoX5T8k",
  authDomain: "my-firebase-project-10063.firebaseapp.com",
  databaseURL: "https://my-firebase-project-10063.firebaseio.com",
  projectId: "my-firebase-project-10063",
  storageBucket: "my-firebase-project-10063.appspot.com",
  messagingSenderId: "19603774294",
  appId: "1:19603774294:web:d9014b5dbfca7a6f7a94f7",
  measurementId: "G-R8Z8B8VK6C"
};
// Initialize Firebase
const Fire =  Firebase.initializeApp(firebaseConfig);
export default Fire;