import firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { functions } from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDzNscrLNHEGSE93EF-MU1X9EuV8hWWWkg",
  authDomain: "ciphense-8424b.firebaseapp.com",
  databaseURL: "https://ciphense-8424b.firebaseio.com",
  projectId: "ciphense-8424b",
  storageBucket: "ciphense-8424b.appspot.com",
  messagingSenderId: "562698541223",
  appId: "1:562698541223:web:34126a1240c9e97d8ba382",
  measurementId: "G-PSR3Q7JC60"
};

// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);

//     /* Helper */

//     this.serverValue = app.database.ServerValue;
//     this.emailAuthProvider = app.auth.EmailAuthProvider;

//     /* Firebase APIs */

//     this.auth = app.auth();
//     this.db = app.database();

//     /* Social Sign In Method Provider */

//     this.googleProvider = new app.auth.GoogleAuthProvider();
//     this.facebookProvider = new app.auth.FacebookAuthProvider();
//     this.twitterProvider = new app.auth.TwitterAuthProvider();
//   }

//   // *** Auth API ***

//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignInWithGoogle = () =>
//     this.auth.signInWithPopup(this.googleProvider);

//   doSignInWithFacebook = () =>
//     this.auth.signInWithPopup(this.facebookProvider);

//   doSignInWithTwitter = () =>
//     this.auth.signInWithPopup(this.twitterProvider);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doSendEmailVerification = () =>
//     this.auth.currentUser.sendEmailVerification({
//       url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
//     });

//   doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password);

//   // *** Merge Auth and DB User API *** //

//   onAuthUserListener = (next, fallback) =>
//     this.auth.onAuthStateChanged(authUser => {
//       if (authUser) {
//         this.user(authUser.uid)
//           .once('value')
//           .then(snapshot => {
//             const dbUser = snapshot.val();

//             // default empty roles
//             if (!dbUser.roles) {
//               dbUser.roles = {};
//             }

//             // merge auth and db user
//             authUser = {
//               uid: authUser.uid,
//               email: authUser.email,
//               emailVerified: authUser.emailVerified,
//               providerData: authUser.providerData,
//               ...dbUser,
//             };

//             next(authUser);
//           });
//       } else {
//         fallback();
//       }
//     });

//   // *** User API ***

//   user = uid => this.db.ref(`users/${uid}`);

//   users = () => this.db.ref('users');

//   // *** Message API ***

//   message = uid => this.db.ref(`messages/${uid}`);

//   messages = () => this.db.ref('messages');
// }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const googleprovider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleprovider);
};

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: 'popup' });

export const signInWithFacebook = () => {

    auth.signInWithPopup(facebookProvider);
};
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};