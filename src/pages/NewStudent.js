import React, { useEffect, useState } from 'react';

export function CreateStudent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/cohort/')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
        <form>
            <div>
                <h3>Enter details for a new student:</h3>
            </div>
            <div>
                <input type="text" name="student_id" placeholder="Student's ID" required/>
            </div>
            <div>
                <br></br>
                <input type="text" name="first_name" placeholder="Student's First Name" required/>
            </div>
            <div>
                <br></br>
                <input type="text" name="last_name" placeholder="Student's Last Name" required/>
            </div>
            <div>
                <br></br>
                <input type="text" name="email" placeholder="Student's Email" required/>
            </div>
            <div>
                <p>Choose a cohort for the new student:</p>
            </div>
            <div>
                {data !== null ?
                                <select id="cohort" name="cohort" required>
                                    {data.map((cohort) => (
                                        <option key={cohort.id} value={cohort.degree} >{cohort.name}</option>
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
