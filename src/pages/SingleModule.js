import React, { useEffect,useState } from 'react';
import { useParams } from "react-router-dom";

export function SingleModule(){
    const [data, setData] = useState([]);
    const { module_code } = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/${module_code}/`)
            .then((response) => response.json())
            .then((elem) => {
                console.log(elem);
                setData([elem]);
            })
            .catch((error) => console.log(error));

    }, [module_code]);

    return <div>
        {data &&
          data.map((item) => (
            <div>
              <h4 key={item.code}>
                Module Name: {item.full_name} <br></br>
                Module Code: {item.code}<br></br>
                Continous Assessment Split: {item.ca_split}<br></br>
              </h4>
            </div>
          ))}
    </div>
}