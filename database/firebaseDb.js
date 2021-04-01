// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyANHVmnh-BsbV_Ysef_AJlmSsye7cvZav8",
    authDomain: "reactnativefirebase-ff191.firebaseapp.com",
    projectId: "reactnativefirebase-ff191",
    storageBucket: "reactnativefirebase-ff191.appspot.com",
    messagingSenderId: "900585615564",
    appId: "1:900585615564:web:7739fffb27fc68fa58d269"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;