import React, { useState } from "react";

	const initialForm = {
		name: "",
		image: "",
	  price: ""
	}

function NewPlantForm({ onAddPlant }) {
		
		const [formData, setFormData] = useState(initialForm)
		
		function handleChange(e) {
			const { name, value } = e.target
			setFormData({ ...formData, [name]: value })
		}			
		
	function handleSubmit(e) {
		e.preventDefault()
		const config = {
			method: 'POST',
			headers: { 'Content-Type': 'Application/JSON' },
			body: JSON.stringify(formData)
		}
		fetch("http:://localhost:6001/plants", config)
			.then(resp => resp.json())
			.then(onAddPlant)
		setFormData(initialForm)
    }
 
		return (
	    <div className="new-plant-form">
	      <h2>New Plant</h2>
	      <form onSubmit={handleSubmit}>
					<input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
	        <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL" />
					<input onChange={handleChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" /> 
					<button type="submit">Add Plant</button>
	      </form>
	    </div>
	  );
	}

export default NewPlantForm;
