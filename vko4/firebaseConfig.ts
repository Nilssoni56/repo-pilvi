import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc9T1_seDy9F9cGci5tlFrQIkkb-3urPw",
  authDomain: "pilvipalvelut-ae173.firebaseapp.com",
  projectId: "pilvipalvelut-ae173",
  storageBucket: "pilvipalvelut-ae173.appspot.com",
  messagingSenderId: "889338549839",
  appId: "1:889338549839:web:a999665dca5317c6f4fc3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth };
