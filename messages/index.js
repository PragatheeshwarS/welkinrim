// Initialize Firebase
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

// Initialize Realtime Database
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref('contactForm');

// Function to fetch messages from Realtime Database and populate the table
function fetchMessages() {
    const messageTable = document.getElementById('message-body');

    // Clear previous messages
    messageTable.innerHTML = '';

    // Fetch messages
    messagesRef.once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const messageData = childSnapshot.val();

        // Create a table row for each message
        const row = document.createElement('tr');
        console.log(messageData);
        row.innerHTML = `
            <td>${messageData.name}</td>
            <td>${messageData.emailid}</td>
            <td>${messageData.phone}</td>
            <td>${messageData.company}</td>
        `;

        messageTable.appendChild(row);
        });
    }, (error) => {
        console.error("Error fetching messages: ", error);
    });
}

// Fetch messages on page load
document.addEventListener('DOMContentLoaded', fetchMessages);