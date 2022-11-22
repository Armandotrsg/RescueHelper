/* import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"; */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    collection,
    doc,
    getFirestore,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* import firebase from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"; */

const firebaseConfig = {
    apiKey: "AIzaSyB0SyWk0wpjyKhxKkvi0mgJro2gYP7p21Y",
    authDomain: "rescue-helper.firebaseapp.com",
    projectId: "rescue-helper",
    storageBucket: "rescue-helper.appspot.com",
    messagingSenderId: "38108453413",
    appId: "1:38108453413:web:72298d3350a99d84247dcc",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let peopleCounter = document.getElementById("peopleCounter");
let vibraciones = document.getElementById("vibraciones");

const unsub = onSnapshot(doc(db, "Edificio1", "Salon1"), (doc) => {
    peopleCounter.innerHTML = doc.data().people;
    let sensacion = "";
    //Round doc.data().vibrations to 4 decimals and absolute value
    let vib = Math.abs(Math.round(doc.data().vibrations * 10000) / 10000);
    let text = "text-success";
    if (vib < 0.0017) {
        sensacion = "Ninguna";
    } else if (vib < 0.014) {
        sensacion = "Débil";
    } else if (vib < 0.039) {
        sensacion = "Ligera";
        text = "text-warning";
    } else if (vib < 0.092) {
        sensacion = "Moderada";
        text = "text-warning";
    } else if (vib < 0.18) {
        sensacion = "Fuerte";
        text = "text-danger";
    } else if (vib < 0.34) {
        sensacion = "Muy fuerte";
        text = "text-danger";
    } else if (vib < 0.65) {
        sensacion = "Severa";
        text = "text-danger";
    } else if (vib < 1.24) {
        sensacion = "Muy severa";
        text = "text-danger";
    } else {
        sensacion = "Extrema";
        text = "text-danger";
    }
    vibraciones.innerHTML = String(vib) + " g" + "&nbsp&nbsp&nbspSensación: " + sensacion;
    vibraciones.className = "text-center mb-5" + " " + text;
});

/* // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//read from collection habitacion2010 on realtime
db.collection("edificio1").doc("habitacion2010")
    .onSnapshot((doc) => {
        document.getElementByID("PeopleCounter").innerHTML = doc.data().PeopleCounter;
        document.getElementByID("vibraciones").innerHTML = doc.data().vibraciones;
        
    }); */

/* const firestore = getFirestore();

const edificio = doc(firestore, "edificio1", "habitacion1");

const docSnap = await getDoc(edificio);

if (docSnap.exists()) {
    const docData = docSnap.data();
    //convert to JSON
    const json = JSON.stringify(docData);

    people = document.getElementById("PeopleCounter");
    people.innerHTML = json.people;

    vibraciones = document.getElementById("vibraciones");
    vibraciones.innerHTML = json.vibraciones;
} else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}
//wait 1 second
await new Promise((r) => setTimeout(r, 1000));
 */
