
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB42u6rKH64_qT6vp7EfykbtIlU5kC8Frs",
    authDomain: "kwitter-project-fd4dc.firebaseapp.com",
    projectId: "kwitter-project-fd4dc",
    storageBucket: "kwitter-project-fd4dc.appspot.com",
    messagingSenderId: "233534170823",
    appId: "1:233534170823:web:7b1554db43995b54ecc0e2",
    measurementId: "G-KWCNWESJZR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
function addUser() {

    username = document.getElementById("user_name").value;
    
    localStorage.setItem("user_name" , username);
    
    window.location = "kwitter_room.html";
    
    }