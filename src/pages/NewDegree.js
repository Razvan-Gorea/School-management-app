import React, { useState } from 'react';

export function CreateDegree(){
  const [formData, setFormData] = useState({
    full_name: '',
    shortcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      };
      const response = await fetch('http://127.0.0.1:8000/api/degree/', options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <br></br><br></br>
      <label>
        Full Name:
        <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
      <br></br>
      <br></br>
      </label>
      <label>
        Shortcode:
        <input type="text" name="shortcode" value={formData.shortcode} onChange={handleChange} />
      <br></br>
      </label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

