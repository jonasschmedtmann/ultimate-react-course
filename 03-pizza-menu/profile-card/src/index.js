import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
	return (
		<div className='card'>
			<Avatar />
			<div className='data'>
				<Intro />
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return (
		<img
			className='avatar'
			src='https://media.istockphoto.com/id/2151210881/photo/a-caucasian-male-is-shopping-online-using-a-laptop-and-a-credit-card.webp?a=1&b=1&s=612x612&w=0&k=20&c=yoGmCdydC__C0U9ewXlpjVXYB_eoTL0GRAETKFxpjEI='
		/>
	);
}

function Intro() {
	return (
		<div>
			<h1>John Doe</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>
		</div>
	);
}

function Skill(props) {
	return (
		<div
			className='skill'
			style={{ backgroundColor: props.color }}
		>
			<span>{props.skill}</span>
			<span>{props.icon}</span>
		</div>
	);
}

function SkillList() {
	return (
		<div className='skill-list'>
			<Skill
				skill='HTML'
				icon='🌐'
				color='red'
			/>
			<Skill
				skill='CSS'
				icon='🎨'
				color='blue'
			/>
			<Skill
				skill='JavaScript'
				icon='💻'
				color='yellow'
			/>
			<Skill
				skill='React'
				icon='⚛️'
				color='purple'
			/>
			<Skill
				skill='Node.js'
				icon='🚀'
				color='green'
			/>
		</div>
	);
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
