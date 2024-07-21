import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import { useState } from 'react';

import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      {/* If we want to set a state outside of a component, we can pass the function to set the desired state as prop to the component */}
      {/* By this way we send the setState function inside the component */}
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movies was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />*/}
    <StarRating
      maxRating={5}
      messages={['Terrable', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={24} color={'red'} className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>,
);
