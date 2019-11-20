  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDTpjXHIZklGEJ59nTXyJW8UKqhtaWPh-g",
    authDomain: "inovatewp.firebaseapp.com",
    databaseURL: "https://inovatewp.firebaseio.com",
    projectId: "inovatewp",
    storageBucket: "inovatewp.appspot.com",
    messagingSenderId: "945535788207",
    appId: "1:945535788207:web:2096dbbafdd2a7983a605a",
    measurementId: "G-R7Q0EKJ2NK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 




const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const updateBtn = document.getElementById("updateBtn");

const database  = firebase.database();
const rootRef = database.ref('users'); //1 users is the name of the database or the main json object name
// database.ref('/users/'+ userId.value) //2
// use 1 instead of 2 for readablity 
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const autoId = rootRef.push().key;
 rootRef.child(autoId).set({
      first_name:firstName.value,
      last_name: lastName.value,
      age:age.value,

  })
});
// here I am allowing the user to create a id that is not a good practice
// I have to make some changes to this so lets do it
// see the line no 32 where I will be created a automatically generatic trick to add user Id 
// and I pushed the value to the child of rootRef in this line instead of the userId from the input that is being  take 
// from the user 