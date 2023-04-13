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
            cohort: 'http://127.0.0.1:8000/api/student/' + String(cohort[cohort.selectedIndex].value) + '/',
    }

    console.log(student);
}
  };
  return (
    <div>
        <form onSubmit={(event) => handleSubmit(event) }>
            <div>
                <h3>Enter details for a new student:</h3>
            </div>
            <div>
                <input type="text" id="student_id" name="student_id" placeholder="Student's ID" required/>
            </div>
            <div>
                <br></br>
                <input type="text" id="first_name" name="first_name" placeholder="Student's First Name" required/>
            </div>
            <div>
                <br></br>
                <input type="text" id="last_name" name="last_name" placeholder="Student's Last Name" required/>
            </div>
            <div>
                <br></br>
                <input type="text" id="email" name="email" placeholder="Student's Email" required/>
            </div>
            <div>
                <p>Choose a cohort for the new student:</p>
            </div>
            <div>
                {data !== null ?
                                <select id="cohort" name="cohort" required>
                                    {data.map((cohort) => (
                                        <option key={cohort.id} value={cohort.id} >{cohort.name}</option>
                                    ))} 
                                </select>
                        : null}
            </div>
            <div>
                <br></br>
                <button type='submit'>Create Student</button>
            </div>
            </form>
    </div>
  );
}
