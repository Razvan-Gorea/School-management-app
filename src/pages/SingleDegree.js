import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SingleDegree() {
   // Two state variables are used to store data and courses separately
    const [data, setData] = useState([]);
    const [courses, setCourses] = useState([]);
    //The shortcode is taken from the URL
    const { shortcode } = useParams();
  
    useEffect(() => { //The effect hook is used to fetch the data from an API URL
      fetch(`http://127.0.0.1:8000/api/degree/${shortcode}/`)
        .then((response) => response.json())
        //The received data is stored in the data state variable using setData
        .then((elem) => {
          setData([elem]); // set data as an array with a single object
        })

        .catch((error) => console.log(error));
      //Fetch data about the cohorts associated with this degree's shortcode
      fetch(`http://127.0.0.1:8000/api/cohort/?degree=${shortcode}`)
        .then((response) => response.json())
        //Update courses state variable with received data
        .then((elem) => {
          setCourses(elem); // set data as an array with a single object
        });
    }, [shortcode]);
  
    return (
      <div>
        {data &&
          data.map((item) => (
            <div className="my-5 shadow-lg rounded-3 p-5">
              {/*Render degree name*/}
              <h2 key={item.shortcode}>
                {item.full_name} - {item.shortcode}
              </h2>
              {/*Render degree name and shortcode*/}
              <br/>
              <div className="list-group">
              <p key={item.shortcode} className="list-group-item border-0 shadow rounded-0"><br/>Degree Name - {item.full_name} <br/>Degree Shortcode - {item.shortcode}<br/><br/></p>
              </div>
              {/*Render a heading for associated cohorts*/}
            </div>
          ))}
        
        <div className="my-5 shadow-lg rounded-3 p-5">
        <h2>Cohorts</h2>
        <br/>
        <div className="list-group">
        {courses && courses.map((course) => (
          <div>
            <p key={course.id} className="list-group-item border-0 shadow rounded-0">
              {/*Render the associated cohort details*/}
              Cohort ID - {course.id}
              <br />
              Cohort Name - {course.name}
              <br />
              Year - {course.year}
              <br />
            </p>
          </div>
        ))}
        </div>
        </div>
      </div>
    );
}

