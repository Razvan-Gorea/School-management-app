export function Home(){
    return <div className="my-5 shadow-lg rounded-3 w-50 p-5">
        
        <div className="card border-0">
            <div className="card-body">
                    <h1 className="my-2">Home</h1>
                <br></br>
                <h5>Existing Urls:</h5>
                <br></br>
                <div className="list-group">
                <p className="list-group-item border-0 shadow rounded-0"> degrees/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0">/degree/[INSERT_DEGREE_SHORTCODE]/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0"> create_degree/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0"> cohorts/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0">/cohort/[INSERT_COHORT_ID]/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0"> create_cohort/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0"> modules/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0">/module/[INSERT_MODULE_CODE]/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0">/modules_delivered_to_cohort/[INSERT_COHORT_ID]/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0"> create_module/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0">/student/[INSERT_STUDENT_ID]/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0"> create_student/<br></br><br></br></p>
                <p className="list-group-item border-0 shadow rounded-0"> set_student_grade/<br></br><br></br></p>
                </div>
         </div>
         </div>
        </div>
}