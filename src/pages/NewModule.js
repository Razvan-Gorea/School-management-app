import React, { useState, useEffect } from 'react';

export function CreateModule(){
    const [data, setData] = useState(null);
    const [cohorts, setCohorts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/cohort/')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const handleCohort = (event) => {
        const cohort = event.target.value;
        if (event.target.checked) {
            setCohorts([...cohorts, cohort]);
        } else {
            setCohorts(cohorts.filter((c) => c !== cohort));
        }
    };

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            const code = event.target.code;
            const full_name = event.target.full_name;
            const ca_split = event.target.ca_split;

            const Module = {
                code: String(code.value),
                full_name: String(full_name.value),
                ca_split: parseInt(ca_split.value),
                delivered_to: cohorts.map((cohort) => "http://127.0.0.1:8000/api/cohort/" + cohort + "/"),
            };

            const caller = "http://127.0.0.1:8000/api/module/"

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Module)
            };

            fetch(caller, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));

        window.location.reload();
    }
    else {
        console.log("Error")
    }
    };
    
    return (
        <div className='my-5 shadow-lg rounded-3 p-5 w-30'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className='mb-3'>
                    <div>
                        <h4>Enter new module details:</h4>
                    </div>
                    <label htmlFor="code" className='form-label'/>
                    <input type="text" id="code" name="code" placeholder="Module Code" className='form-control' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="full_name" className='form-label'/>
                    <input type="text" id="full_name" name="full_name" placeholder="Module Full Name" className='form-control' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="ca_split" className='form-label'/>
                    <input type="number" id="ca_split" name="ca_split" placeholder="Module CA Split" className='form-control' required/>
                </div>
                <div>
                    <br/>
                    <h4>Module to be delivered to:</h4>
                    <br/>
                    {data !== null ? (
                    <div>
                        {data.map((cohort) => (
                        <div key={cohort.id} className='form-check'>
                            <label htmlFor={cohort.id} className='form-check-label'>{cohort.name}</label>
                            <input type="checkbox" id={cohort.id} name="cohort" value={cohort.id} checked={cohorts.includes(cohort.id)} onChange={handleCohort} className='form-check-input'/>
        </div>
      ))}
    </div>
  ) : null}
                </div>
                <div>
                    <br></br>
                    <button type="submit" className='btn btn-primary btn-lg'>Create Module</button>
                </div>
            </form>
        </div>

    )
}