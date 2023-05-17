import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const fbase = {
  apiKey: process.env.REACT_APP_API_KEY,
  databaseURL:"https://a-seat-for-pregnant-women-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const firebaseApp=firebase.initializeApp(fbase);


export const firebaseDB=firebaseApp.database();
