

//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 
//   import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyCXh9MUp0qUUV81OeUgS4YPzkA32AK97Bo",
//     authDomain: "atm-machine-2bec3.firebaseapp.com",
//     projectId: "atm-machine-2bec3",
//     storageBucket: "atm-machine-2bec3.firebasestorage.app",
//     messagingSenderId: "334622259938",
//     appId: "1:334622259938:web:4c505ea8ef449a0c1fbcbb"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
 


// const db= getDatabase(app)
 


const users = [
    { name: "eshakhan", account: 35356357, pin: 1234, balance: 10000 },
    { name: "ariba", account: 12386757, pin: 5674, balance: 0 },
    { name: "hamna", account: 17874997, pin: 124, balance: 0 },
    { name: "inshara", account: 123740357, pin: 6529, balance: 0 },
    { name: "anusha", account: 12820585, pin: 7560, balance: 0 },
    { name: "redy", account: 23487650, pin: 7684, balance: 0 },
    { name: "laiba", account: 75675778, pin: 1644, balance: 0 },
    { name: "bro", account: 123863543, pin: 6578, balance: 0 }
];
let currentUser = null; // Store the logged-in user

// Login function to validate user credentials
const login=
function login() {
  const name = document.getElementById('name').value;
  const pin = parseInt(document.getElementById('pin').value);
  const errorMessage = document.getElementById('errorMessage');

  // Search for the user with the matching name and PIN
  currentUser = users.find(user => user.name === name && user.pin === pin);

  if (currentUser) {
    // Hide the login form and show the ATM interface
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('atmInterface').style.display = 'block';
    errorMessage.textContent = ''; // Clear any previous error message
  } else {
    // Show an error if the login fails
    errorMessage.textContent = 'Invalid name or PIN.';
  }
}
function checkBalance() {
    alert(`Your current balance is $${currentUser.balance}`);
  }

  // Withdraw function
  function withdraw() {
    if (currentUser.balance >= 100) {
      currentUser.balance -= 100;
      alert(`You have withdrawn $100. Your new balance is $${currentUser.balance}`);
    } else {
      alert('Insufficient balance!');
    }
  }

  // Deposit function
  function deposit() {
    currentUser.balance += 100;
    alert(`You have deposited $100. Your new balance is $${currentUser.balance}`);
  }

  // Logout function
  function logout() {
    currentUser = null; // Clear the current user
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('atmInterface').style.display = 'none';
    alert('You have logged out.');
  }