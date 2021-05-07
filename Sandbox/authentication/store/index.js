import Vuex from 'vuex'
import firebase, { auth, GoogleProvider, TwitterProvider } from '@/utils/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      }
    },
    actions: {
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      signInWithGoogle ({commit}) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider)
          resolve()
        })
      },

      signInWithTwitter ({commit}) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(TwitterProvider)
          resolve()
        })
      },

      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore

/*

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;
if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}



var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});



var user = firebase.auth().currentUser;
user.updateEmail("user@example.com").then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});



var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});




firebase.auth().languageCode = 'fr';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();




var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();
user.updatePassword(newPassword).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});



var auth = firebase.auth();
var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});




var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});



var user = firebase.auth().currentUser;
var credential;
// Prompt the user to re-provide their sign-in credentials. For actions like change primary email, update password, deleting account
user.reauthenticateWithCredential(credential).then(function() {
  // User re-authenticated.
}).catch(function(error) {
  // An error happened.
});


*/