
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
  var emploName= "";
  var role = "";
  var date = "" ;
  var rate = 0;
  document.querySelector("#btnname").addEventListener("click", function(event) {
    event.preventDefault();
}
