import "./App.css";
import Navbar from "./componants/Navbar";
import { ToastContainer, toast } from "react-toastify";
import Course from "./componants/Course";
import AllCourses from "./componants/AllCourses";
import AddCourse from "./componants/AddCourse";
import Menus from "./componants/Menus";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  return (
    <div>
     <Router>

     <ToastContainer />
      
      <div className="container ms-auto me-auto">
      <Navbar />
        <div class="row mt-3">
          <div class="col-md-4">
          <Menus/>
          </div>
          <div class="col-md-8">
          <Routes>
          <Route exact path="/add-courses" element={<AddCourse/>} />
          <Route exact path="/view-courses" element={<AllCourses/>} />
          </Routes>
          </div>
        </div>
      </div>

     </Router>
    </div>
  );
}

export default App;
