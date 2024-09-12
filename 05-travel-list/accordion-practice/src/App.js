import './styles.css';
import { useState } from 'react';

const faqs = [
	{
		title: 'Where are these chairs assembled?',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
	},
	{
		title: 'How long do I have to return my chair?',
		text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
	},
	{
		title: 'Do you ship to countries outside the EU?',
		text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
	},
];

export default function App() {
	return (
		<div>
			<Accordion data={faqs} />
		</div>
	);
}

function Accordion({ data }) {
	const [curOpen, setCurOpen] = useState(null);
	return (
		<div className='accordion'>
			{data.map((faq, index) => {
				return (
					<>
						<AccordionItem
							key={faq.title}
							num={index + 1}
							title={faq.title}
							text={faq.text}
							curOpen={curOpen}
							setCurOpen={() => setCurOpen(index + 1)}
						>
							{faq.text}
						</AccordionItem>
					</>
				);
			})}
			<AccordionItem
				key='Test 1'
				num={23}
				title='Test 1'
				text='Test 1'
				curOpen={curOpen}
				setCurOpen={() => setCurOpen(23)}
			>
				<ul>
					<li>Test 1</li>
					<li>Test 2</li>
					<li>Test 3</li>
				</ul>
			</AccordionItem>
		</div>
	);
}

function AccordionItem({ num, title, curOpen, setCurOpen, children }) {
	const isOpen = num === curOpen;
	return (
		<div className={isOpen ? 'item open' : 'item'}>
			<p className='number'>{num < 10 ? `0${num}` : num}</p>
			<p className='title'>{title}</p>
			<p
				className='icon'
				onClick={() => setCurOpen(num)}
			>
				{isOpen ? '-' : '+'}
			</p>
			{isOpen && <div className='content-box'>{children}</div>}
		</div>
	);
}
