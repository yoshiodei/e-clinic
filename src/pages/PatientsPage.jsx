import React from 'react';
import Accounts from './Accounts Page/Accounts';
import Patientsregistration from './Patient form/PatientsRegistration';
import Patientinfomodal from './Patient Information Modal/PatientInfoModal';
import Patients from './Patients/Patients';

const Patientspage = () => {
    return (
        <section className='main-page-section'>
            <Patients/>
            {/* <Patientsregistration/> */}
            {/* <Accounts/> */}
            {/* <Patientinfomodal/> */}
        </section>
    );
}

export default Patientspage;
