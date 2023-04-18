import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export function SingleCohort(){
    const [data, setData] = useState([]);
    const [students, setStudents] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cohort/${id}/`)
            .then((response) => response.json())
            .then((elem) => {
                console.log(elem);
                setData([elem]);
            })
            .catch((error) => console.log(error));

        fetch(`http://127.0.0.1:8000/api/student/?cohort=${id}`)
            .then((response) => response.json())
            .then((elem) => {
                console.log(elem);
                setStudents(elem);
            })
            .catch((error) => console.log(error));

    }, [id]);

    return (
        <div className='my-5 shadow-lg rounded-3 w-50 p-5'>
            {data &&
          data.map((item) => (
            <div>
              <h2 key={item.id} className='my-2'>
                Cohort - {item.name} <br></br>
                Year - {item.year}
              </h2><br/>
            </div>
          ))}
          <div className='list-group'>
          {students && students.map((student) => (
          <div>
            <p key={student.student_id} className='list-group-item border-0 shadow rounded-0'>
              <br/>Student ID - {student.student_id}
              <br />
              First Name - {student.first_name}
              <br />
              Last Name - {student.last_name}
              <br />
              Email - {student.email}<br/><br/>
            </p>
          </div>
        ))}
        </div>
        </div>
    );

}