// database/firebaseDb.js

import * as firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';

class FirebaseSvc {
    constructor() {
      if (!firebase.apps.length) { //avoid re-initializing
        firebase.initializeApp({
            apiKey: 'AIzaSyCRzIoKCErd5e99WQ1JDbMhozF4Uk4JDew',
            authDomain: 'hello-f572c.firebaseapp.com',
            databaseURL: 'hello-f572c.firebaseapp.com',
            projectId: 'hello-f572c',
            appId: "1:271293032254:android:583c2f8ecda7860749ee6f",
            messagingSenderId: "271293032254",
            storageBucket: 'hello-f572c.appspot.com'
        });
       }
    }

    componentDidMount() {
      firebaseSvc.refOn(message => 
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message),
          })
        )
      );
    } 

    refOn = callback => {      

          firebase.database().ref("Messages")
          .on('child_added', snapshot => callback(this.parse(snapshot)));
      }
      parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {_id, timestamp, text, user};
        return message;
      };
    
      send = messages => {
        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const createdAt = firebase.database.ServerValue.TIMESTAMP;
          const message = {text, user, createdAt };
          firebase.database().ref("Messages").push(message);
        }
      };

      refOff = () =>{
        firebase.database().ref("Messages").off();
      }

      uploadImage = async uri => {
        try {
          const response = await fetch(uri);
          const blob = await response.blob();
          const ref = firebase.storage().ref('avatar').child(uuid.v4());
          const task = ref.put(blob);
          return new Promise((resolve, reject) => {
            task.on('state_changed', () => { }, reject, 
              () => resolve(task.snapshot.downloadURL));
          });
        } catch (err) {
          console.log('uploadImage error: ' + err.message); 
        }
      }
    

  }

  const firebaseSvc = new FirebaseSvc();
  export default firebaseSvc;