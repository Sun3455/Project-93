
var firebaseConfig = {
      apiKey: "AIzaSyCdWPs08C-oKhpHtH0z9OaXOst6q-8C2Os",
      authDomain: "kwitter-6bd81.firebaseapp.com",
      databaseURL: "https://kwitter-6bd81-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bd81",
      storageBucket: "kwitter-6bd81.appspot.com",
      messagingSenderId: "90363506789",
      appId: "1:90363506789:web:e9a723757201803c4ad68c"
    };

      firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
