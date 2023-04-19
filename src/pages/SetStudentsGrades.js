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
        <div className="my-5 shadow-lg rounded-3 p-5 w-30">
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
                <h4>Modify a student's grade:</h4>
                <p>(The grade must already exist to be modified)</p>
            </div>
            <div className="mb-3"> 
                <input type="number" id="ca_mark" name="ca_mark" placeholder="CA Mark" className="form-control" required/>
            </div>
            <div className="mb-3">
                <input type="number" id="exam_mark" name="exam_mark" placeholder="Exam Mark" className="form-control" required/>
            </div>
            <div className="mb-3">
                <input type="number" id="total_grade" name="total_grade" placeholder="Total Grade" className="form-control" required/>
            </div>
            <div>
                <br></br>
                <button type='submit' className="btn btn-primary btn-lg">Modify grade</button>
            </div>
            </form>
    </div>
    );
}