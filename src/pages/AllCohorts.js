import React, { useState, useEffect, Fragment } from 'react';


export function Cohorts(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/cohort/')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    },[]);
    
    
    return <Fragment>
    <div className='my-5 shadow-lg rounded-3 w-50 p-5'>
        <h1>Cohorts</h1>
        <br></br>
        <div className='list-group'>
        {data.map(item => (
            <p key={item.id} className='list-group-item border-0 shadow rounded-0'><br></br><br></br>Cohort ID - {item.id}<br></br>
            Cohort Name - {item.name} <br></br>
            Year - {item.year}<br></br><br></br>
            </p>
        ))}
        </div>
    </div>
    </Fragment>
}