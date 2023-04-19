import { useParams } from "react-router-dom";

export function SetStudentsGrades(){
    const { grade_id } = useParams();

    const handleSubmit = (event) => {
        if (event){
            event.preventDefault()
            const ca_mark = event.target.ca_mark;
            const exam_mark = event.target.exam_mark;
            const total_grade = event.target.total_grade;

            const grade = {
                ca_mark: parseInt(ca_mark.value),
                exam_mark: parseInt(exam_mark.value),
                total_grade: parseInt(total_grade.value),
                id: parseInt(grade_id), 
            }

            const caller = "http://127.0.0.1:8000/api/grade/" + String(grade_id) + "/"

            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grade)
            };

            fetch(caller, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));

            window.location.reload();
        }
        else {
            console.log("Error")
        }
};

    return (
        <div>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
                <h3>Modify a student's grade:</h3>
                <p>(The grade must already exist to be modified)</p>
            </div>
            <div>
                <br></br>
                <input type="number" id="ca_mark" name="ca_mark" placeholder="CA Mark" required/>
            </div>
            <div>
                <br></br>
                <input type="number" id="exam_mark" name="exam_mark" placeholder="Exam Mark" required/>
            </div>
            <div>
                <br></br>
                <input type="number" id="total_grade" name="total_grade" placeholder="Total Grade" required/>
            </div>
            <div>
                <br></br>
                <button type='submit'>Modify grade</button>
            </div>
            </form>
    </div>
    );
}