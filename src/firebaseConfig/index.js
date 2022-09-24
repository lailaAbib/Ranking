import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {

    const firebaseConfig = {
        apiKey: "AIzaSyCn0oLzP3-1SAP2XIF07BNzQlABMjRhU00",
        authDomain: "jogoqueno.firebaseapp.com",
        databaseURL: "https://jogoqueno-default-rtdb.firebaseio.com",
        projectId: "jogoqueno",
        storageBucket: "jogoqueno.appspot.com",
        messagingSenderId: "835071807050",
        appId: "1:835071807050:web:b7462e0af6a1c27054a0b3",
        measurementId: "G-67CB2665JE"
    };

    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase;