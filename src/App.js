import { Routes, Route, Link } from "react-router-dom"
import { Home } from "./pages/Home";
import { Degrees }  from "./pages/AllDegrees";
import { Cohorts } from "./pages/AllCohorts";
import { CreateDegree } from "./pages/NewDegree";
import { CreateCohort } from "./pages/NewCohort";
import { CreateModule } from "./pages/NewModule";
import { CreateStudent } from "./pages/NewStudent";
import { AllModules } from "./pages/AllModules";
import { SingleDegree } from "./pages/SingleDegree";
import { ModuleForCohort } from "./pages/ModulesForCohort";
import { SingleModule } from "./pages/SingleModule";
import { SingleCohort } from "./pages/SingleCohort";
import { IndividualStudent } from "./pages/IndividualStudent";
import { SetStudentsGrades } from "./pages/SetStudentsGrades";

function App() {
  return (
  <>
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3 mt-0 my-">
    <div className="container-fluid">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item mx-1 my-auto"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/degrees/" className="nav-link active" aria-current="page">All Degrees</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/cohorts/" className="nav-link active" aria-current="page">All Cohorts</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/modules/" className="nav-link active" aria-current="page">All Modules</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/create_degree/" className="nav-link active" aria-current="page">Create Degree</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/create_cohort/" className="nav-link active" aria-current="page">Create Cohort</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/create_module/" className="nav-link active" aria-current="page">Create Module</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/create_student/" className="nav-link active" aria-current="page">Create Student</Link></li>
      <li className="nav-item mx-1 my-auto"><Link to="/set_student_grade/" className="nav-link active" aria-current="page">Set Student Grade</Link></li>
    </ul>
    </div>
  </nav> 
  
  <br/>

  
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/degrees/" element={<Degrees />}></Route>{/*  DONE */}
    <Route path="/degree/:shortcode/" element={<SingleDegree />}></Route>{/*  DONE */}
    <Route path="/cohorts/" element={<Cohorts />}></Route>{/*  DONE */}
    <Route path="/modules/" element={<AllModules />}></Route>{/*  DONE */}
    <Route path="/modules_delivered_to_cohort/:id/" element={<ModuleForCohort />}></Route>{/*  TODO */}
    <Route path="/module/:module_code/" element={<SingleModule />}></Route>{/*  TODO */}
    <Route path="/cohort/:id/" element={<SingleCohort />}></Route>{/*  TODO */}
    <Route path="/student/:student_id/" element={<IndividualStudent />}></Route>{/*  TODO */}
    <Route path="/create_degree/" element={<CreateDegree />}></Route>{/*  TODO */}
    <Route path="/create_cohort/" element={<CreateCohort />}></Route>{/*  TODO */}
    <Route path="/create_module/" element={<CreateModule />}></Route>{/*  TODO */}
    <Route path="/create_student/" element={<CreateStudent />}></Route>
    <Route path="/set_student_grade/" element={<SetStudentsGrades />}></Route>{/*  TODO */}
  </Routes>
  
  </>
  
  )
}

export default App;
