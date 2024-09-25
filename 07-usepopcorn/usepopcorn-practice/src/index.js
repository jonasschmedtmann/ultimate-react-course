import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StarRating from './StarRating';

function Test() {
	const [movieRating, setMovieRating] = React.useState(3);
	return (
		<div>
			<StarRating
				maxRating={10}
				color='blue'
				size={48}
				className='test-star-rating'
				defaultRating={3}
				onSetRating={setMovieRating}
			/>
			<p>This Movie was rated {movieRating}</p>
		</div>
	);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating
			maxRating={5}
			messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
		/>
		<StarRating
			maxRating={5}
			color='red'
			size={28}
			className='test-star-rating'
			defaultRating={3}
		/> */}
		<Test />
	</React.StrictMode>
);
