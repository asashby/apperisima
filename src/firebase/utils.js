import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account '});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;
    console.log(userAuth);
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists){

        const { displayName, email, photoURL} = userAuth;
        const timestamp = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdDate: timestamp,
                ...additionalData
            });
        } catch(e){
            // console.log(e);
        }
    }
    return userRef;
};