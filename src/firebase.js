import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";


export const auth = firebase.initializeApp({
	apiKey: "AIzaSyB8GinHOpLtSLJgbnhaZ9bNIR1DPiMaxDw",

	authDomain: "unichat-d902a.firebaseapp.com",
  
	projectId: "unichat-d902a",

	dabaseURL: "https://unichat-d902a.firebaseio.com",
  
	storageBucket: "unichat-d902a.appspot.com",
  
	messagingSenderId: "417718793849",
  
	appId: "1:417718793849:web:ce28aa0711015760e046a8"
  
}).auth()

