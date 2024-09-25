import React, { useState } from 'react';
import './styles.css';
function App() {
	return (
		<div className='App'>
			<Counter />
		</div>
	);
}

export default App;

function Counter() {
	const [step, setStep] = useState(0);
	//const [count, setCount] = useState(0);

	const today = new Date();
	const handleNext = (setState) => {
		setState((prevState) => prevState + 1);
	};
	const handlePrev = (setState) => {
		setState((prevState) => prevState - 1);
	};

	const handleChange = (e) => {
		setStep(Number(e.target.value));
	};
	return (
		<div>
			<div>
				<input
					type='range'
					min='0'
					max='10'
					value={step}
					onChange={(e) => setStep(Number(e.target.value))}
				/>
				<div>
					<button
						onClick={() => {
							handlePrev(setStep);
						}}
					>
						-
					</button>
					<input
						type='text'
						value={step}
						onChange={handleChange}
					/>
					<button
						onClick={() => {
							handleNext(setStep);
						}}
					>
						+
					</button>
				</div>
				{/* <div>
					<button
						onClick={() => {
							handlePrev(setCount);
						}}
					>
						-
					</button>
					<span>Count: {count}</span>
					<button
						onClick={() => {
							handleNext(setCount);
						}}
					>
						+
					</button>
				</div> */}
			</div>
			<p>
				{step > 0 && (
					<span>
						{step} days after is{' '}
						{new Date(today.setDate(today.getDate() + step)).toDateString()}
					</span>
				)}
				{step < 0 && (
					<span>
						{step} days ago is{' '}
						{new Date(today.setDate(today.getDate() + step)).toDateString()}
					</span>
				)}
				{step === 0 && <span>Today is {today.toDateString()}</span>}
			</p>
			<button onClick={() => setStep(0)}>Reset</button>
		</div>
	);
}
