// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAatug1VKejgKhbu-ZgiYIniSWj8bxZQw",
    authDomain: "projeto-mundo-invertido-19696.firebaseapp.com",
    projectId: "projeto-mundo-invertido-19696",
    storageBucket: "projeto-mundo-invertido-19696.appspot.com",
    messagingSenderId: "474042319617",
    appId: "1:474042319617:web:1b446c48dd56d80e8e9100",
    measurementId: "G-Q4F4E06P1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;