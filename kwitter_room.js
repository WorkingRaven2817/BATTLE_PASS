
//// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAEfgJq5lls_FiHiQdYeCqToy6VMV4CGGQ",
      authDomain: "pruebaclass-a9df1.firebaseapp.com",
      projectId: "pruebaclass-a9df1",
      storageBucket: "pruebaclass-a9df1.appspot.com",
      messagingSenderId: "404552859159",
      appId: "1:404552859159:web:49bf600700f02c9e1a6652"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
