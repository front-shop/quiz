// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getFirestore } from '@firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0SPxYfuvnOxASdMC7wGmyHnAhfmxdPQk',
  authDomain: 'quiz-40700.firebaseapp.com',
  projectId: 'quiz-40700',
  storageBucket: 'quiz-40700.appspot.com',
  messagingSenderId: '629335269284',
  appId: '1:629335269284:web:d6d32a245a8aa8fb74ab31',
  measurementId: 'G-GE0P9RENSQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
