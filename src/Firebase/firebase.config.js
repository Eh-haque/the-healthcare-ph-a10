const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    /* 
    apiKey: "AIzaSyBP-MVqJERrYtgzylVMEd5c5uDeYYbyze8",
    authDomain: "the-healthcare-website.firebaseapp.com",
    projectId: "the-healthcare-website",
    storageBucket: "the-healthcare-website.appspot.com",
    messagingSenderId: "687281018334",
    appId: "1:687281018334:web:3b367685b656d9ce7d794f"
    */
};

export default firebaseConfig;