import React from 'react';
import Patientsregistration from './Patient form/PatientsRegistration';
import Patients from './Patients/Patients';

const Patientspage = () => {
    return (
        <section className='main-page-section'>
            {/* <Patients/> */}
            <Patientsregistration/>
        </section>
    );
}

export default Patientspage;
