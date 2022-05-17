import React from "react";

function Slider() {
  const [ price, setPrice ] = useState(40);
	
	const handleInput = (e)=>{
    setPrice( e.target.value );
  }
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

  return (
    <div className="Slider">
      <input type="range" onInput={ handleInput } />
      <h1>Price: { price }</h1>
      <div>
      { courses.filter( course => { return course.prices > price[0] }).map( course => {
        return <p key={course.name}>{ course.name } :
					{!!course.prices[0] ? ' from ' + course.prices[0] : ''} 
					{!!course.prices[1] ? ' to ' + course.prices[1] : ''} 
					&#8381; </p>
      })}        
      </div>
    </div>
  )
}

export default Slider