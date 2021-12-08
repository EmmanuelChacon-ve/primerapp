  
    import firebase from 'firebase/app'

   
import 'firebase/firestore'

    
    const firebaseConfig = {
        apiKey: "AIzaSyBDFwwxjIRUMWT1RKVECY2-mFioS2neyxU",
        authDomain: "gochilandia-72a9e.firebaseapp.com",
        projectId: "gochilandia-72a9e",
        storageBucket: "gochilandia-72a9e.appspot.com",
        messagingSenderId: "1086355606149",
        appId: "1:1086355606149:web:0b0c0d84543237347a37ec"
      };
   
const app = firebase.initializeApp(firebaseConfig)

 
export const firestore = firebase.firestore(app)
