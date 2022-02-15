import Topnav from './TopNav';
import "./../styles/main-section.css";
import Patientinfo from './PatientInfo';
import Pagecontent from './PageContent';

const Mainsection = ({patients, addNewPatient}) => {

    return (
        <main className='main-section'>
            <Topnav />
            <Patientinfo />
            <Pagecontent addNewPatient={addNewPatient} patients={patients} />
        </main>
    );
}

export default Mainsection;
