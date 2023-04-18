import React, { useState, useEffect } from 'react';

export function Degrees(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/degree/')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    },[]);

    return (
        <div className='my-5 shadow-lg rounded-3 w-50 p-5'>
            <h1 className='my-2'>Degrees</h1>
            <br></br>
            <div className='list-group'>
            {data.map(item => (
                <p key={item.shortcode} className='list-group-item border-0 shadow rounded-0'>{item.full_name} - {item.shortcode}<br></br><br></br></p>
            ))}
            </div>
            </div>
    );
    }