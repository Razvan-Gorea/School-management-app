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
    <div>
      <h4>
        Student ID: {data.student_id} <br />
        First Name: {data.first_name} <br />
        Last Name: {data.last_name} <br />
        Email: {data.email} <br />
      </h4>
    </div>
    <div>
      <h3>Grades for Modules:</h3>
        {grades.map((grade) => (
          <p key={grade.id}>
            Module: {grade.module}<br></br>
            CA Mark: {grade.ca_mark}<br></br>
            Exam Mark: {grade.exam_mark}<br></br>
            Total Grade: {grade.total_grade}<br></br>
          </p>
        ))}
      </div>
    </div>
  );
}
