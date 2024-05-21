import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: 0,
    tax: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/items/', item);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="tax"
          value={item.tax}
          onChange={handleChange}
          placeholder="Tax"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
