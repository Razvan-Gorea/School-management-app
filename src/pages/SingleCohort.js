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
        <div>
        </div>
    );

}