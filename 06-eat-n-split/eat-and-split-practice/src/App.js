import React, { useState } from 'react';
const initialFriends = [
	{
		id: 118836,
		name: 'Clark',
		image: 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id: 933372,
		name: 'Sarah',
		image: 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id: 499476,
		name: 'Anthony',
		image: 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friendList, setFriendList] = useState(initialFriends);
	const [selectedFriend, setSelectedFriend] = useState(null);
	function toggleAddFriend() {
		setShowAddFriend((show) => !show);
	}
	function addFriend(newFriend) {
		setFriendList((friends) => [...friends, newFriend]);
		setShowAddFriend(false);
	}

	function handleSelection(friend) {
		setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
		setShowAddFriend(false);
	}

	function onSplitBill(value) {
		setFriendList((friends) =>
			friends.map((friend) =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);
		setSelectedFriend(null);
	}
	return (
		<div className='app'>
			<div className='sidebar'>
				<FriendsList
					friendList={friendList}
					selectedFriend={selectedFriend}
					handleSelection={handleSelection}
				/>
				{showAddFriend && <FormAddFriend addFriend={addFriend} />}

				<Button onClick={toggleAddFriend}>
					{showAddFriend ? 'Close' : 'Add Friend'}
				</Button>
			</div>
			<div>
				{selectedFriend && (
					<FormSplitBill
						selectedFriend={selectedFriend}
						onSplitBill={onSplitBill}
					/>
				)}
			</div>
		</div>
	);
}

function FriendsList({ friendList, selectedFriend, handleSelection }) {
	return (
		<ul>
			{friendList.map((friend) => {
				return (
					<Friend
						key={friend.id}
						friend={friend}
						handleSelection={handleSelection}
						selectedFriend={selectedFriend}
					/>
				);
			})}
		</ul>
	);
}

function Friend({ friend, selectedFriend, handleSelection }) {
	const isSelected = selectedFriend?.id === friend.id;
	return (
		<li className={isSelected ? 'selected' : ''}>
			<img
				src={friend.image}
				alt={friend.name}
			/>
			<h3>{friend.name}</h3>
			{friend.balance < 0 && (
				<p className={'red'}>
					You owe {friend.name} {Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance > 0 && (
				<p className={'green'}>
					{friend.name} owes you {Math.abs(friend.balance)}
				</p>
			)}
			{friend.balance === 0 && <p>You and {friend.name} are even</p>}
			<Button onClick={() => handleSelection(friend)}>
				{isSelected ? 'Close' : 'Select'}
			</Button>
		</li>
	);
}

function Button({ onClick, children }) {
	return (
		<button
			className='button'
			onClick={onClick}
		>
			{children}
		</button>
	);
}

function FormAddFriend({ addFriend }) {
	const [name, setName] = useState('');
	const [image, setImage] = useState('https://i.pravatar.cc/48');

	function handleSubmit(e) {
		e.preventDefault();

		if (!name || !image) return;

		const id = crypto.randomUUID();
		const newFriend = {
			id,
			name,
			image: `${image}?=${id}`,
			balance: 0,
		};

		addFriend(newFriend);

		setName('');
		setImage('https://i.pravatar.cc/48');
	}

	return (
		<form
			className='form-add-friend'
			onSubmit={handleSubmit}
		>
			<label>👫 Friend name</label>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<label>🌄 Image URL</label>
			<input
				type='text'
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>

			<Button>Add</Button>
		</form>
	);
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
	const [bill, setBill] = useState('');
	const [paidByUser, setPaidByUser] = useState('');
	const paidByFriend = bill ? bill - paidByUser : '';
	const [whoIsPaying, setWhoIsPaying] = useState('user');

	function handleSubmit(e) {
		e.preventDefault();
		if (!bill || !paidByUser) return;
		onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
	}
	return (
		<form
			className='form-split-bill'
			onSubmit={handleSubmit}
		>
			<h2>Split a bill with {selectedFriend.name}</h2>
			<label>💸 Bill Value</label>
			<input
				type='number'
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>
			<label>🌟 Your Expense</label>
			<input
				type='number'
				value={paidByUser}
				onChange={(e) =>
					setPaidByUser(
						Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
					)
				}
			/>
			<label>🌟 {selectedFriend.name}'s Expense</label>
			<input
				type='number'
				value={paidByFriend}
				disabled
			/>
			<label>🌟 Who is paying the bill</label>
			<select
				value={whoIsPaying}
				onChange={(e) => setWhoIsPaying(e.target.value)}
			>
				<option value={'user'}>Me</option>
				<option value={'friend'}>{selectedFriend.name}</option>
			</select>
			<Button>Split Bill</Button>
		</form>
	);
}
