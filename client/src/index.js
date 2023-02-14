import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import ToDo from './App';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//  <Routes>
//    <Route  path='/' element={<ToDo />}/>
//  </Routes>
//  </BrowserRouter>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ToDo/>
  </StrictMode>
)
