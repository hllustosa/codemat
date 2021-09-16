const functions = require("firebase-functions");
const userStats = require("./userStats");
const admin = require("firebase-admin");

// // Initialize app
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
// set GOOGLE_APPLICATION_CREDENTIALS
//  =D:\Hermano\workspace\compemat\backend\compemat-3277c049031f.json
// firebase emulators:start
exports.userstats = functions.https.onRequest(userStats.app);
exports.submissions = functions.https.onRequest(userStats.app);
