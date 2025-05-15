import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3FmOAsQg7PM0WaGGBQOpgbjFNsXOaidY",
  authDomain: "smartclass-93dd3.firebaseapp.com",
  projectId: "smartclass-93dd3",
  storageBucket: "smartclass-93dd3.appspot.com",
  messagingSenderId: "615646418497",
  appId: "1:615646418497:web:69f5871dab6037283058c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Handle registration
document.getElementById("submit").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), {
      name: name,
      email: email,
      role: "teacher", 
    });

    alert("Teacher registered!");
    window.location.href = "dashboard.html"; // Redirect to teacher dashboard
  } catch (err) {
    alert("Registration failed: " + err.message);
  }
});
