import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Accountspage from '../pages/AccountsPage';
import Consultation from '../pages/Consultation';
import Examination from '../pages/Examination';
import Patientspage from "../pages/PatientsPage";
import Pharmacypage from "../pages/PharmacyPage";
import RecordsPage from '../pages/RecordsPage';
import Testpage from '../pages/TestPage';
import "./../styles/page-content.css";
import Notfound from './NotFound';

const Pagecontent = ({patients, examData, diseaseList, updatePatientList}) => {
    return (
        <div className="page-content">
            {/* the code for the page component goes here */}
            {/* give it a class name of "main-page-component" to apply default styling */} 
                <Routes>
                    <Route path="/" element={<Patientspage/>}/> 
                    <Route path="/consultation" element={<Consultation updatePatientList={updatePatientList}  patients={patients} examData={examData} diseaseList={diseaseList} />}/> 
                    <Route path="/accounts" element={<Accountspage />}/> 
                    <Route path="/records" element={<RecordsPage />}/> 
                    <Route path="/pharmacy" element={<Pharmacypage />}/> 
                    <Route path="/examination" element={<Examination />} /> 
                    <Route path="*" element={<Notfound />}/>
                </Routes>
        </div>
    );
}

export default Pagecontent;
