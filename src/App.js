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
  
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/degrees/">All Degrees</Link></li>
      <li><Link to="/cohorts/">All Cohorts</Link></li>
      <li><Link to="/modules/">All Modules</Link></li>
      <li><Link to="/create_degree/">Create Degree</Link></li>
      <li><Link to="/create_cohort/">Create Cohort</Link></li>
      <li><Link to="/create_module/">Create Module</Link></li>
      <li><Link to="/create_student/">Create Student</Link></li>
      <li><Link to="/set_student_grade/">Set Student Grade</Link></li>
    </ul>
  </nav>
  
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
