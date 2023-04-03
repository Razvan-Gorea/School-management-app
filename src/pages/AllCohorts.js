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
    <div>
        <h1>All Cohorts</h1>
        {data.map(item => (
            <p key={item.id}>Cohort ID:{item.id}<br></br>
            Cohort Name: {item.name} <br></br>
            Year:{item.year}<br></br>
            </p>
        ))}
    </div>
    </Fragment>
}