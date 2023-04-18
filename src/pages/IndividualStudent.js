import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function IndividualStudent() {
  const [data, setData] = useState({});
  const [grades, setGrades] = useState([]);
  const { student_id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/student/${student_id}/`)
      .then((response) => response.json())
      .then((elem) => {
        setData(elem);
      })
      .catch((error) => console.log(error));

    fetch(`http://127.0.0.1:8000/api/grade/?student=${student_id}`)
      .then((response) => response.json())
      .then((elem) => {
        setGrades(elem);
      })
      .catch((error) => console.log(error));
  }, [student_id]);
  

  return (
    <div>
    <div className='my-5 shadow-lg rounded-3 p-5'>
      <h6>
        Student ID - {data.student_id} <br />
        First Name - {data.first_name} <br />
        Last Name - {data.last_name} <br />
        Email - {data.email} <br />
      </h6>
    </div>
    <div className='my-5 shadow-lg rounded-3 p-5'>
      <br/>
      <h6>Grades for Modules:</h6>
      <div className='list-group'>
        {grades.map((grade) => (
          <p key={grade.id} className='list-group-item border-0 shadow rounded-0'>
            Module - {grade.module.split("/").slice(-2, -1)}<br></br>
            CA Mark - {grade.ca_mark}<br></br>
            Exam Mark - {grade.exam_mark}<br></br>
            Total Grade - {grade.total_grade}<br></br>
          </p>
        ))}
        </div>
      </div>
    </div>
  );
}
