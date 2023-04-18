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
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <div>
                        <h3>Enter details for a new cohort:</h3>
                    </div>
                    <label htmlFor="id"/>
                    <input type="text" id="id" name="id" placeholder="Cohort ID" required/>
                </div>
                <div>
                    <br></br>
                    <label htmlFor="year"/>
                    <input type="number" id="year" name="year" placeholder="Cohort Year" required/>
                </div>
                <div>
                    <br></br>
                    <label htmlFor="name"/>
                    <input type="text" id="name" name="name" placeholder="Full Cohort Name" required/>
                </div>
                <div>
                    <p>Cohort Belongs To: </p>
                </div>
                <div>
                    <label htmlFor="degree"/>
                    
                        {data !== null ?
                                <select id="degree" name="degree" required>
                                    {data.map((degree) => (
                                        <option key={degree.id} value={degree.shortcode} >{degree.full_name}</option>
                                    ))} 
                                </select>
                        : null}
                    
                </div>
                <div>
                    <br></br>
                    <button type="submit">Create Cohort</button>
                </div>
            </form>
        </div>
    )
}