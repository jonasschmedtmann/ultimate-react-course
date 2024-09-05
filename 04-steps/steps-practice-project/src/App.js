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
			<Steps />
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
					<p className='message'>
						Step {step}: {messages[step - 1]}
					</p>
					<div className='buttons'>
						<button
							style={{ background: '#7950f2', color: '#fff' }}
							onClick={handlePrev}
						>
							Previous
						</button>
						<button
							style={{ background: '#7950f2', color: '#fff' }}
							onClick={handleNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}
