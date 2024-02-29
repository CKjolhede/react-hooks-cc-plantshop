import React, { useState } from "react";

function PlantCard({ name, image, price }) {
	
	const [inStock, setInStock] = useState(true)
	
	const toggleInStock = () => setInStock(!inStock)
	
	return (
		<li className="card" data-testid="plant-item">
			<img src={image} alt={name} />
			{/*default? = "https://via.placeholder.com/400"*/}
      <h4>{name}</h4>
      <p>Price: {price}</p>
			{inStock ? (
				<button onClick={toggleInStock} className = "primary" >In Stock</button >
      ) : (
					<button onClick={toggleInStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
