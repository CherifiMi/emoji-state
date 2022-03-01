const functions = require("firebase-functions");


// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const { user } = require("firebase-functions/v1/auth");
admin.initializeApp();

 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello Mito!", {structuredData: true});
   response.send("My emoji is \u{1F642}!");
 });

 exports.addUserToFirestore = functions.auth.user().onCreate((user) => {
  functions.logger.info("New user created!");
  var usersRef = admin.firestore().collection("users");
  return usersRef.doc(user.uid).set({
      displayName: user.displayName,
      emojis: "\u{1F43C}\u{1F33F}\u{2764}", 
  });
});


