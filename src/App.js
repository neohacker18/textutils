import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFpD42DOJ9dVjSZYW1o30uTeAor-s77bA",
  authDomain: "textutils-968de.firebaseapp.com",
  projectId: "textutils-968de",
  storageBucket: "textutils-968de.appspot.com",
  messagingSenderId: "558368343221",
  appId: "1:558368343221:web:27a1bad0b4d1a3b65e2afc",
  measurementId: "G-R3Z10K8H46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(33 53 72)';
      showAlert("Dark Mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode has been disabled","success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/" element={<TextForm heading="Enter The Text To Analyse Below" mode={mode} showAlert={showAlert}/>}></Route>
        <Route exact path="/about" element={<About mode={mode}/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
