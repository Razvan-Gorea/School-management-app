import React, { useEffect, useState } from 'react';


export function CreateCohort() {
    const [data, setData] = useState(null);

    useEffect(() => {
        
        fetch('http://127.0.0.1:8000/api/degree/')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            const id = event.target.id;
            const year = event.target.year;
            const degree = event.target.degree;
            const name = event.target.name;

            const caller = "http://127.0.0.1:8000/api/cohort/"

            const cohort = {
                id: String(id.value),
                year: parseInt(year.value),
                name: String(name.value),
                degree: "http://127.0.0.1:8000/api/degree/" + String(degree[degree.selectedIndex].value) + "/",
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cohort)
            };

            fetch(caller, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));

        }
        else{
            console.log("Error")
        }
    window.location.reload();
    };

    return (
        <div className='my-5 shadow-lg rounded-3 p-5'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <div>
                        <h4>Enter details for a new cohort:</h4>
                    </div>
                    <div  className="mb-3">
                    <label htmlFor="id" className='form-label'/>
                    <input type="text" id="id" name="id" placeholder="Cohort ID" className='form-control' required/>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor="year" className='form-label'/>
                    <input type="number" id="year" name="year" placeholder="Cohort Year"  className='form-control' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="name" className='form-label'/>
                    <input type="text" id="name" name="name" placeholder="Full Cohort Name" className='form-control' required/>
                </div>
                <div>
                    <br></br>
                    <h4>Cohort Belongs To: </h4>
                </div>
                <div>
                    <label htmlFor="degree"/>
                    
                        {data !== null ?
                                <select id="degree" name="degree" className='form-select' required>
                                    {data.map((degree) => (
                                        <option key={degree.id} value={degree.shortcode} >{degree.full_name}</option>
                                    ))} 
                                </select>
                        : null}
                    
                </div>
                <div>
                    <br></br>
                    <button type="submit" className='btn btn-primary btn-lg'>Create Cohort</button>
                </div>
            </form>
            </div>
    )
}