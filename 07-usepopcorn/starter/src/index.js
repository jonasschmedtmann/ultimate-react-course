import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './starRating';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5}/>
    <StarRating maxRating={10}/>
    <StarRating />
    {/* <App /> */}
  </React.StrictMode>
);

