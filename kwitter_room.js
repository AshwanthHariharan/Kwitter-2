// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAI96rEJEFbGx4PqFFpkJxPT8ridhwID2Q",
    authDomain: "lets-chat-web-app-be793.firebaseapp.com",
    projectId: "lets-chat-web-app-be793",
    storageBucket: "lets-chat-web-app-be793.appspot.com",
    messagingSenderId: "419670477862",
    appId: "1:419670477862:web:7bb822792d302793552ae7",
    measurementId: "G-RQSNZ3EE1T"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function logout() {

localStorage.removeItem("user_name");

window.location = "login.html";

}