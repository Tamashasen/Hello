// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCRzIoKCErd5e99WQ1JDbMhozF4Uk4JDew',
    authDomain: 'hello-f572c.firebaseapp.com',
    databaseURL: 'hello-f572c.firebaseapp.com',
    projectId: 'hello-f572c',
    appId: "1:271293032254:android:583c2f8ecda7860749ee6f",
    messagingSenderId: "271293032254",
    storageBucket: 'hello-f572c.appspot.com'
};

firebase.initializeApp(firebaseConfig);

export default firebase;