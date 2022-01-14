import Topnav from './TopNav';
import "./../styles/main-section.css";
import Patientinfo from './PatientInfo';
import Pagecontent from './PageContent';

const Mainsection = () => {
    return (
        <main className='main-section'>
            <Topnav />
            <Patientinfo />
            <Pagecontent />
        </main>
    );
}

export default Mainsection;
