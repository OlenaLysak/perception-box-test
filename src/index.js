import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterPage from './CharacterPage';

//Context
import MyContextProvider from './context/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  </React.StrictMode>
);
