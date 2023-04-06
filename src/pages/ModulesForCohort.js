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

    return (<div>
        {data && data.map((item) => (
            <div>
                <h4 key={item.code}>
                    Module Code: {item.code} <br></br>
                    Module Name: {item.full_name} <br></br>
                    Continous Assessment Split: {item.ca_split} <br></br>
                </h4>
                </div>
                ))}
        </div>
    )

}