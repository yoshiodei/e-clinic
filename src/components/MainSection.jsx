import Topnav from './TopNav';
import "./../styles/main-section.css";
import Patientinfo from './PatientInfo';
import Pagecontent from './PageContent';

const Mainsection = ({props}) => {
    return (
        <main className='main-section'>
            <Topnav />
            <Patientinfo />
            <Pagecontent props={props} />
        </main>
    );
}

export default Mainsection;
