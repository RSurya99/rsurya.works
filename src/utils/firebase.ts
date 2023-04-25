import firebase from "firebase/app";
import 'firebase/analytics';
import { FIREBASE_API_KEY } from '~/config/app';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "rsurya-portfolio.firebaseapp.com",
  projectId: "rsurya-portfolio",
  storageBucket: "rsurya-portfolio.appspot.com",
  messagingSenderId: "690777424256",
  appId: "1:690777424256:web:aac16074ddb27fbec70165",
  measurementId: "G-EL69TYQQ3J"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };