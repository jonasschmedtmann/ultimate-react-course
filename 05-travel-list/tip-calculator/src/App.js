import React, { useState } from 'react';
import './App.css';

function App() {
	const [bill, setBill] = useState(0);
	const [yourRating, setYourRating] = useState('');
	const [friendRating, setFriendRating] = useState('');
	return (
		<div className='App'>
			<BillInput
				bill={bill}
				setBill={setBill}
			/>
			<ServiceRating
				rating={yourRating}
				setRating={setYourRating}
			>
				<label htmlFor='service'>How did you like the service?</label>
			</ServiceRating>
			<ServiceRating
				rating={friendRating}
				setRating={setFriendRating}
			>
				<label htmlFor='service'>How did your friend like the service?</label>
			</ServiceRating>
			{bill > 0 && yourRating && friendRating && (
				<>
					<div>
						<FinalBill
							bill={bill}
							rating={(Number(yourRating) + Number(friendRating)) / 2}
						/>
					</div>
					<div>
						<button
							onClick={() => {
								setBill(0);
								setYourRating('');
								setFriendRating('');
							}}
						>
							Reset
						</button>
					</div>
				</>
			)}
		</div>
	);
}

function BillInput({ bill, setBill }) {
	return (
		<div>
			<label htmlFor='bill'>How much was your bill?</label>
			<input
				type='number'
				id='bill'
				value={bill}
				onChange={(e) => setBill(e.target.value)}
			/>
		</div>
	);
}

function ServiceRating({ rating, setRating, children }) {
	return (
		<div>
			{children}
			<select
				id='service'
				onChange={(e) => setRating(e.target.value)}
			>
				<option value=''></option>
				<option value='0.3'>Great (30%)</option>
				<option value='0.2'>Good (20%)</option>
				<option value='0.15'>Okay (15%)</option>
				<option value='0.1'>Not good (10%)</option>
				<option value='0.05'>Terrible (5%)</option>
			</select>
		</div>
	);
}

function FinalBill({ bill, rating }) {
	const tip = Math.round(Number(bill) * Number(rating));
	const total = Number(bill) + tip;

	return (
		<div>
			<h2>{`You pay ${total} (${`$${bill}`} + ${`$${tip} tip`})`}</h2>
		</div>
	);
}

export default App;
