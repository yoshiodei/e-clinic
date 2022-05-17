import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import "./../styles/patients.css";
import Pagination from '../components/Pagination';
import Newpatientmodal from '../components/Modals/newPatientModal';
import { addToConsult, setPatientsStatus } from '../redux/action';

const Patientspage = ({patients, addToConsult, setPatientsStatus}) => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    // const [patientId, setPatientId] = useState("");

    const handleChange = (e) =>{
        setSearch(e.target.value);
    }

    const sendToConsult = (obj) => {
        let newObj = {...obj, examDone: false, diagnosisDone: false,}
        let newPatientList = patients.filter((patient)=> patient.id != obj.id);
        // console.log(newPatientList);
        addToConsult(newObj, newPatientList);
    }
    
    const filterName = () => patients.filter((patient,index) =>  patient.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        setPatientsStatus();
    }, []);

    return (
        <section className='main-page-section'>
            <div className='main-page-section__header-div'>
                <h4 >PATIENTS</h4>
                <button type="button" class="btn btn-success btn-sm custom-btn"
                  data-bs-toggle="modal" data-bs-target="#newPatientModal">New Patient</button>
            </div>
            
            <br/>
            <input 
                class="form-control mb-2" 
                type="text" 
                placeholder="Type patient name to search" 
                value={search}
                aria-label="default input example"
                onChange={handleChange}
            />
            <table class="table table-striped">
                <thead >
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col" colSpan="3">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Consultation</th>  
                    </tr>
                </thead>
                <tbody style={{position: "relative"}}>
                    { filterName().length == 0 ? <div colspan="7" className="no-item"> <h3>No item in list</h3></div> : null }
                    {
                        filterName().slice(((page-1)*5),(page*5)).map((patient, index) =>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{1 + index + ((page-1)*5)}</th>
                                    <td colspan="3">{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.paymentMethod}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-sm custom-btn" onClick={()=>sendToConsult(patient)}>Send to consultation</button>
                                    </td>
                                </tr>
                                
                            );
                        })
                    }
                </tbody>
            </table>

            { filterName().length != 0 ? 
            ( <Pagination patientNumber={filterName().length} setPage={setPage} page={page} /> ) : null
            }

            
            {/* ---- Modals ---- */}

            <Newpatientmodal />

            {/* <Patienthistorymodsal patient={patients.filter(patient=> patient.id == patientId)} />
            <Exammodal  patient={patients.filter(patient=> patient.id == patientId)} diseaseList={diseaseList} examData={examData} />
            <Diagnosemodal patient={patients.filter(patient=> patient.id == patientId)} diseaseList={diseaseList} updatePatientList={updatePatientList} />
            <Prescribemodal patient={patients.filter(patient=> patient.id == patientId)} updatePatientList={updatePatientList}/> */}
            

        </section>
    );
}

const mapDispatchToProps = { addToConsult, setPatientsStatus }

const mapStateToProps = (state) => {
    return {
        patients : state.patients
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Patientspage);
