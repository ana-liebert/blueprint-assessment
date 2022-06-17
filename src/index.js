import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';

console.log(App)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="" element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

