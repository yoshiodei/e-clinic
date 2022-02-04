import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adddrugs from "../pages/AddDrugs";
import Consultation from "../pages/Consultation";

import Pharmacy from "../pages/Pharmacy";
import Testpage from "../pages/TestPage";
import "./../styles/page-content.css";

const Pagecontent = ({ patients }) => {
  return (
    <div className="page-content">
      {/* the code for the page component goes here */}
      {/* give it a class name of "main-page-component" to apply default styling */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Consultation patients={patients} />} />
          <Route path="/test" element={<Testpage />} />s
          <Route path="/pharmacy" element={<Pharmacy patients={patients} />} />
          <Route path="/add" element={<Adddrugs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Pagecontent;
