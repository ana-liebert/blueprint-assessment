import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <Routes>
    <Route path="" element={<App/>} />
    <Route path="/exercise1" element={<Exercise1/>} />
    <Route path="/exercise2" element={<Exercise2/>} />
    </Routes>
  </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


