import React, { useEffect, useState } from 'react';

export function CreateStudent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cohort/')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);
  
  const handleSubmit = (event) => {
    if (event){
        event.preventDefault();
        const student_id = event.target.student_id;
        const first_name = event.target.first_name;
        const last_name = event.target.last_name;
        const email = event.target.email;
        const cohort = event.target.cohort;
    
        const student = {
            student_id: String(student_id.value),
            first_name: String(first_name.value),
            last_name: String(last_name.value),
            email: String(email.value),
            cohort: "http://127.0.0.1:8000/api/cohort/" + String(cohort[cohort.selectedIndex].value) + "/",
    }
    
    const caller = "http://127.0.0.1:8000/api/student/"

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
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
        <form onSubmit={(event) => handleSubmit(event) }>
            <div>
                <h4>Enter details for a new student:</h4><br/>
            </div>
            <div className='mb-3'>
                <input type="text" id="student_id" name="student_id" placeholder="Student's ID" className='form-control' required/>
            </div>
            <div className='mb-3'>
                <input type="text" id="first_name" name="first_name" placeholder="Student's First Name" className='form-control' required/>
            </div>
            <div className='mb-3'>
                <input type="text" id="last_name" name="last_name" placeholder="Student's Last Name" className='form-control' required/>
            </div>
            <div className='mb-3'>
                <input type="text" id="email" name="email" placeholder="Student's Email" className='form-control' required/>
            </div>
            <div>
                <br/>
                <h4>Choose a cohort for the new student:</h4>
                <br/>
            </div>
            <div>
                {data !== null ?
                                <select id="cohort" name="cohort" className='form-select' required>
                                    {data.map((cohort) => (
                                        <option key={cohort.id} value={cohort.id} >{cohort.name}</option>
                                    ))} 
                                </select>
                        : null}
            </div>
            <div>
                <br></br>
                <button type='submit' className='btn btn-primary btn-lg' >Create Student</button>
            </div>
            </form>
    </div>
  );
}
