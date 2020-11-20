import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './styles/main.scss';
import App from './app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyArrCCT7qja_TW7bZbe0aloXV2d1mufQoo',
  authDomain: 'burger-queen-fe050.firebaseapp.com',
  databaseURL: 'https://burger-queen-fe050.firebaseio.com',
  projectId: 'burger-queen-fe050',
  storageBucket: 'burger-queen-fe050.appspot.com',
  messagingSenderId: '703014686446',
  appId: '1:703014686446:web:ddd6945bd373dc510e6dff',
  measurementId: 'G-5ZQ8VG7TGB',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = (
  <BrowserRouter>
    <>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
