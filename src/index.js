import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
