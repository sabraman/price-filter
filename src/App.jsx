import { useState } from 'react'
import './App.css'


let courses = [
	{ name: "Courses in England", prices: [0, 100] },
	{ name: "Courses in Germany", prices: [500, null] },
	{ name: "Courses in Italy", prices: [100, 200] },
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];


function App() {
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(500);

	return (
		<div className="App">
			<h1>Price: {minPrice} - {maxPrice}</h1>
			<label>from <input type="text" placeholder='0' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} /></label>
			<label> to <input type="text" placeholder='500' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} /></label>

			<div>
				{courses
					.filter(course => {
						return Math.max(course.prices[0], course.prices[1]) >= minPrice
							&& Math.max(course.prices[0], course.prices[1]) <= maxPrice
					})
					.map(course => {
						return <p key={course.name}>{course.name} :
							{!!course.prices[0] ? ' from ' + course.prices[0] : ''}
							{!!course.prices[1] ? ' to ' + course.prices[1] : ''}
							<span >{!course.prices[0] && !course.prices[1] ? ' not available' : ' \u20BD'} </span> </p>
					})}
			</div>
		</div>
	)
}

export default App
