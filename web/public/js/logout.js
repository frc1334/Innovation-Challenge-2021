document.getElementById('logout').onclick = () => {

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location = "signup.html";
    }, function(error) {
      // An error happened
      console.log("Error: " + error);
    });
  
  }
  
  // The global firebase database object
  let db = firebase.database();
  
  // Get the currently singed in users
  // let user = firebase.auth().currentUser;
  
  // Database tester code
  document.getElementById('poststuff').onclick = () => {
  }
  
  let user_read = firebase.database().ref('users/' + username + '/read');
  user_read.on('value', function(snapshot) {
    console.log(snapshot.val());
  });