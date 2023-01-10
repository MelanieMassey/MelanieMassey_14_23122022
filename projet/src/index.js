import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Employees from './Pages/Employees';
import Employees2 from './Pages/Employees2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/employees2' element={<Employees2/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

