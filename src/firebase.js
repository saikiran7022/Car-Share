import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";


/*change the values by creating a account in firebase and update them */

export const auth = firebase.initializeApp({
	apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", 

	authDomain: "yourapp.firebaseapp.com",
  
	projectId: "your-app",

	dabaseURL: "https://your-app.firebaseio.com",
  
	storageBucket: "your-app.appspot.com",
  
	messagingSenderId: "XXXXXXXXXXXXXX",
  
	appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  
}).auth()

