import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating maxRating={10} />
		<StarRating maxRating={2} />
		<StarRating />
	</React.StrictMode>
);
