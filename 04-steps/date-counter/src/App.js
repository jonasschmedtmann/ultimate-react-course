import React, { useState } from 'react';
import './App.css';
function App() {
	return (
		<div className='Container'>
			<Counter />
		</div>
	);
}

export default App;

function Counter() {
	const [step, setStep] = useState(0);
	const [count, setCount] = useState(0);
	const today = new Date();
	const handleNext = (setState) => {
		setState((prevState) => prevState + 1);
	};
	const handlePrev = (setState) => {
		setState((prevState) => prevState - 1);
	};
	return (
		<div>
			<div>
				<div>
					<button
						onClick={() => {
							handlePrev(setStep);
						}}
					>
						-
					</button>
					<span>Step: {step}</span>
					<button
						onClick={() => {
							handleNext(setStep);
						}}
					>
						+
					</button>
				</div>
				<div>
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
				</div>
			</div>
			<p>
				{count > 0 && (
					<span>
						{count} days after is{' '}
						{new Date(today.setDate(today.getDate() + count)).toDateString()}
					</span>
				)}
				{count < 0 && (
					<span>
						{count} days ago is{' '}
						{new Date(today.setDate(today.getDate() + count)).toDateString()}
					</span>
				)}
				{count === 0 && <span>Today is {today.toDateString()}</span>}
			</p>
		</div>
	);
}
