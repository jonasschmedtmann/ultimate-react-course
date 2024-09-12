import React, { useState } from 'react';
const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

export default function App() {
	return (
		<div>
			<Steps />
			<StepMessage step={2}>
				<p>Pass in content</p>
				<p></p>
			</StepMessage>
			<Steps />
			<StepMessage step={2}>
				<p>Pass in content</p>
				<p></p>
			</StepMessage>
			<Steps />
			<StepMessage step={3}>
				<p>Pass in content</p>
				<p></p>
			</StepMessage>
		</div>
	);
}

function Steps() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	const handleNext = () => {
		if (step < 3) {
			setStep(step + 1);
		}
	};
	const handlePrev = () => {
		if (step > 1) {
			setStep(step - 1);
		}
	};
	return (
		<>
			<button
				className='close'
				onClick={() => setIsOpen(!isOpen)}
			>
				&times;
			</button>
			{isOpen && (
				<div className='steps'>
					<div className='numbers'>
						<div className={`${step >= 1 ? 'active' : ''}`}>1</div>
						<div className={`${step >= 2 ? 'active' : ''}`}>2</div>
						<div className={`${step >= 3 ? 'active' : ''}`}>3</div>
					</div>
					<StepMessage>{messages[step - 1]}</StepMessage>

					<div className='buttons'>
						<Button
							textColor='#fff'
							backgroundColor='#7950f2'
							onClick={handlePrev}
						>
							<span>👈</span> Previous
						</Button>
						<Button
							textColor='#fff'
							backgroundColor='#7950f2'
							onClick={handleNext}
						>
							<span>Next</span> 👉
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

function Button({ textColor, backgroundColor, onClick, children }) {
	return (
		<button
			style={{ background: backgroundColor, color: textColor }}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

function StepMessage({ step, children }) {
	return (
		<div className='message'>
			<h3>Step {step}</h3>
			{children}
		</div>
	);
}
