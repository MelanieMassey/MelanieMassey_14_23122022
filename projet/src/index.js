import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Employees from './Pages/Employees';
import Employees2 from './Pages/Employees2';
import { store } from "./App/store";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/employees2' element={<Employees2/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

