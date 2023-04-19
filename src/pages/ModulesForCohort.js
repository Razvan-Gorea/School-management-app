import React, { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export function ModuleForCohort(){
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${id}`)
            .then((response) => response.json())
            .then((elem) => {
                setData(elem);
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (<div className="my-5 shadow-lg rounded-3 p-5 w-50">
        <h3>Cohort - {id}</h3>
        {data && data.map((item) => (
            <div className="list-group">
                <p key={item.code} className="list-group-item border-0 shadow rounded-0">
                    <br/><br/>Module Code - {item.code} <br></br>
                    Module Name - {item.full_name} <br></br>
                    Continous Assessment Split - {item.ca_split}<br/><br/>
                </p>
                </div>
                ))}
        </div>
    )

}