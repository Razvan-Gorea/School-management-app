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
    <div>
    <div className='my-5 shadow-lg rounded-3 p-5'>
    <form onSubmit={handleSubmit}>
      <h4>Enter details for a new degree:</h4>
      <div className='mb-3'>
      <label htmlFor='full_name' className='form-label'/>
      <input type="text" id="full_name" name="full_name" value={formData.full_name} onChange={handleChange} placeholder='Degree Full Name' className='form-control' required/>
      </div>
      <div className='mb-3'>
      <label htmlFor='shortcode'/>
        <input type="text" id="full_name" name="shortcode" value={formData.shortcode} onChange={handleChange} placeholder='Degree Shortcode' className='form-control' required/>
      </div>
      <br/>
      <button type="submit" className='btn btn-primary btn-lg'>Create Degree</button>
    </form>
    </div>
    </div>
  );
};

