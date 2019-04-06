
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDC3E2GoTsrmiNebSIgwbCy7DL73nBtyNU",
  authDomain: "employee-data-managment-d7ce8.firebaseapp.com",
  databaseURL: "https://employee-data-managment-d7ce8.firebaseio.com",
  projectId: "employee-data-managment-d7ce8",
  storageBucket: "",
  messagingSenderId: "570191797343"
};
firebase.initializeApp(config);

var dataRef = firebase.database();
// Initial Values
var emploName= "", 
role = "",
date = "" ,
monthRate= 0;
document.querySelector("#teamWork").addEventListener("click", function(event) {
  event.preventDefault(); 
  // get value from input
  name = document.querySelector("#name-input").value.trim();
  role = document.querySelector("#tole-input").value.trim();
  monthRate = document.querySelector("#month-input").value.trim();
  date = document.querySelector("#date-input").value.trim();
  // push the iput
  dataRef.ref().push({
    name: name,
    email: role,
    monthRate: monthRate,
    comment: comment,
    date:date;
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});