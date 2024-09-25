import { useState } from 'react';
import './index.css';

const tempMovieData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt0133093',
		Title: 'The Matrix',
		Year: '1999',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
	},
	{
		imdbID: 'tt6751668',
		Title: 'Parasite',
		Year: '2019',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
	},
];

const tempWatchedData = [
	{
		imdbID: 'tt1375666',
		Title: 'Inception',
		Year: '2010',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: 'tt0088763',
		Title: 'Back to the Future',
		Year: '1985',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Search() {
	const [query, setQuery] = useState('');
	return (
		<input
			className='search'
			type='text'
			placeholder='Search movies...'
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
}

function Logo() {
	return (
		<div className='logo'>
			<span role='img'>🍿</span>
			<h1>usePopcorn</h1>
		</div>
	);
}
function NavBar({ children }) {
	return (
		<nav className='nav-bar'>
			<Logo />
			{children}
		</nav>
	);
}

function Main({ children }) {
	return <main className='main'>{children}</main>;
}
function WatchedSummary({ watched }) {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));
	return (
		<div className='summary'>
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length} movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	);
}
function WatchedMovieList({ watched }) {
	return (
		<ul className='list'>
			{watched.map((movie) => (
				<li key={movie.imdbID}>
					<img
						src={movie.Poster}
						alt={`${movie.Title} poster`}
					/>
					<h3>{movie.Title}</h3>
					<div>
						<p>
							<span>⭐️</span>
							<span>{movie.imdbRating}</span>
						</p>
						<p>
							<span>🌟</span>
							<span>{movie.userRating}</span>
						</p>
						<p>
							<span>⏳</span>
							<span>{movie.runtime} min</span>
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}

function MovieList({ movies }) {
	return (
		<ul className='list'>
			{movies?.map((movie) => (
				<li key={movie.imdbID}>
					<img
						src={movie.Poster}
						alt={`${movie.Title} poster`}
					/>
					<h3>{movie.Title}</h3>
					<div>
						<p>
							<span>🗓</span>
							<span>{movie.Year}</span>
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}
function Box({ element }) {
	const [isOpen, setIsOpen1] = useState(true);
	return (
		<div className='box'>
			<button
				className='btn-toggle'
				onClick={() => setIsOpen1((open) => !open)}
			>
				{isOpen ? '–' : '+'}
			</button>
			{isOpen && element}
		</div>
	);
}

export default function App() {
	const [movies, setMovies] = useState(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);
	return (
		<>
			<NavBar>
				<Search />
				<p className='num-results'>{movies.length} </p>
			</NavBar>
			<Main>
				<Box element={<MovieList movies={movies} />} />

				<Box
					element={
						<>
							<WatchedSummary watched={watched} />
							<WatchedMovieList watched={watched} />
						</>
					}
				/>
			</Main>
		</>
	);
}
