import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import { useState } from "react";
import StarRating from "./StartRating";

function Test() {
	const [movieRating, setMovieRating] = useState(0);

	return (
		<div>
			<StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
			<p>This movie was rated {movieRating} stars</p>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating
			maxRating={5}
			messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
		/>
		<StarRating size={24} color="red" className="test" defaultRating={3} />
		<Test />
	</React.StrictMode>
);
