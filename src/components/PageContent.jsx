import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Consultation from '../pages/Consultation';
import Patientspage from "../pages/PatientsPage";
import Testpage from '../pages/TestPage';
import "./../styles/page-content.css";

const Pagecontent = () => {
    return (
        <div className="page-content">
            {/* the code for the page component goes here */}
            {/* give it a class name of "main-page-component" to apply default styling */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Consultation/>}/> 
                    <Route path="/test" element={<Testpage/>}/> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Pagecontent;
