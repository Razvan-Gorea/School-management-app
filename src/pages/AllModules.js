import React, { useEffect, useState } from 'react';

export function AllModules(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/module/')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    },[]);

    return (
        <div>
            <h1>All Modules</h1>
            {data.map(item => (
                <li key={item.code}>{item.full_name} - {item.code}</li>
            ))}
            </div>
    );
    }