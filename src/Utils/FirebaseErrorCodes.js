export const FirebaseErrorCodes = {
  "auth/app-deleted": "The Firebase app was deleted.",
  "auth/app-not-authorized":
    "The Firebase app is not authorized to use Firebase Authentication.",
  "auth/argument-error":
    "An invalid argument was provided to a Firebase Authentication function.",
  "auth/invalid-api-key": "The provided API key is invalid.",
  "auth/invalid-user-token":
    "The user's token is invalid, expired, or has been revoked.",
  "auth/network-request-failed":
    "A network error occurred (such as a timeout, interrupted connection, or unreachable host).",
  "auth/operation-not-allowed":
    "The requested authentication operation is not allowed.",
  "auth/requires-recent-login": "This operation requires a recent login.",
  "auth/too-many-requests":
    "This operation has been blocked due to unusual activity. Try again later.",
  "auth/unauthorized-domain":
    "The Firebase Authentication domain specified in the request is not authorized.",
  "auth/user-disabled":
    "The user account has been disabled by an administrator.",
  "auth/user-token-expired": "The user's token has expired.",
  "auth/web-storage-unsupported":
    "This browser is not supported or 3rd party cookies and data may be disabled.",
  // Authentication Errors
  "auth/email-already-in-use":
    "The email address is already in use by another account.",
  "auth/invalid-email": "The email address is not valid.",
  "auth/user-not-found": "There is no user record corresponding to this email.",
  "auth/wrong-password": "The password is invalid for the given email.",

  // Realtime Database Errors
  "database/permission-denied":
    "The user does not have permission to access the database.",
  "database/invalid-token":
    "The authentication token is invalid or has expired.",
  "database/unknown-error":
    "An unknown error occurred while accessing the database.",

  // Cloud Firestore Errors
  "firestore/cancelled":
    "The operation was cancelled (typically due to it being interrupted by another operation).",
  "firestore/invalid-argument": "The provided argument is not valid.",
  "firestore/deadline-exceeded": "The operation timed out.",
  "firestore/not-found": "The requested document or resource was not found.",
  "firestore/permission-denied":
    "The user does not have permission to access the requested document or resource.",
  "firestore/resource-exhausted": "The project has reached its quota limit.",
  "firestore/unauthenticated":
    "The request does not have valid authentication credentials for the operation.",
  "firestore/unavailable": "The service is currently unavailable.",
  "firestore/unknown":
    "An unknown error occurred while accessing Cloud Firestore.",

  // Cloud Storage Errors
  "storage/canceled": "The upload or download was canceled.",
  "storage/unknown": "An unknown error occurred while accessing Cloud Storage.",
  "storage/object-not-found":
    "The requested object does not exist in Cloud Storage.",
  "storage/unauthorized":
    "The user does not have permission to access the requested object.",
  "storage/invalid-checksum": "The uploaded object failed the integrity check.",
  "storage/invalid-argument":
    "The provided argument is not valid for this operation.",
  "storage/quota-exceeded": "The project has reached its quota limit.",

  // Cloud Functions Errors
  "functions/internal":
    "An internal error occurred in the Cloud Functions runtime.",
  "functions/invalid-argument":
    "The provided argument is not valid for this operation.",
  "functions/not-found": "The requested Cloud Function does not exist.",
  "functions/permission-denied":
    "The user does not have permission to access the requested Cloud Function.",
  "functions/unavailable": "The service is currently unavailable.",
  "functions/unknown":
    "An unknown error occurred while accessing Cloud Functions.",
};



// export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, "users", userAuth.uid);
//   console.log("userDocRef", userDocRef);

//   const userSnapshot = await getDoc(userDocRef);
//   console.log(userSnapshot);
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInfo,
//       });
//     } catch (error) {
//       console.log("an error occured", error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;
//   try {
//     return await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error) {
//     alert(FirebaseErrorCodes[error.code]);
//     throw error;
//   }
// };