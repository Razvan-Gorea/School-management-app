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
        <div>
            <h1>All Degrees</h1>
            {data.map(item => (
                <li key={item.shortcode}>{item.full_name} - {item.shortcode}</li>
            ))}
            </div>
    );
    }