import Topnav from './TopNav';
import "./../styles/main-section.css";
import Patientinfo from './PatientInfo';
import Pagecontent from './PageContent';

const Mainsection = ({patients, examData, diseaseList, updatePatientList}) => {
    return (
        <main className='main-section'>
            <Topnav />
            <Patientinfo  patients={patients} />
            <Pagecontent patients={patients} examData={examData} diseaseList={diseaseList} updatePatientList={updatePatientList}/>
        </main>
    );
}

export default Mainsection;
