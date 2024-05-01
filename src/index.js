import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Checkout from './src/components/Checkout'; // Check the file path
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <Checkout /> 
  </React.StrictMode>
);
reportWebVitals();
