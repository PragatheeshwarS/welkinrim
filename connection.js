const firebaseConfig = {
    apiKey: "AIzaSyA4Ty3cMYLXlY9PboggLY7ej924nh_M-zk",
    authDomain: "welkinrim.firebaseapp.com",
    databaseURL: "https://welkinrim-default-rtdb.firebaseio.com",
    projectId: "welkinrim",
    storageBucket: "welkinrim.appspot.com",
    messagingSenderId: "806064629142",
    appId: "1:806064629142:web:7b64d2df8e9aab4a5a29b7",
    measurementId: "G-B5E9R0FX7N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");

// document.getElementById("sub-button").addEventListener("submit", submitForm);

function submitForm() {

    var name = document.getElementById("name").value;
    var emailid = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var phone = document.getElementById("phone").value;

    console.log(name,emailid,company,phone);
    window.alert("Thank you for your interest in Welkinrim Technologies. We'll contact you soon.");

    saveMessages(name, emailid, company, phone);
  //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, company , phone) => {
    var newContactForm = contactFormDB.push();
    console.log("data being pushed");
    newContactForm.set({
        name: name,
        emailid: emailid,
        phone: phone,
        company: company,
    });
};
