import Diagnosemodal from "../components/Modals/DiagnoseModal";
import Exammodal from "../components/Modals/ExamModal";
import Patienthistorymodsal from "../components/Modals/PatientHistoryModsal";
import Prescribemodal from "../components/Modals/PrescribeModal";
import "./../styles/consultation.css";
import { useState } from "react";
import Pagination from "../components/Pagination";



const Consultation = ({patients}) => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [patientId, setPatientId] = useState("");

    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
    
    
    const filterName = () => patients.filter((patient,index) =>  patient.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    const handleCheckId = (id)=>{
        setPatientId(id);
        // console.log('your id is', id);
    }

    return (
        <section className='main-page-section'>
            <h4>CONSULTATION</h4>
            {/* <div class="alert alert-primary" role="alert">
                 This page displays the list of Patients selected to meet the doctor for consultation
            </div> */}
            <br/>
            <input 
                class="form-control mb-2" 
                type="text" 
                placeholder="Type patient name to search" 
                value={search}
                aria-label="default input example"
                onChange={handleChange}
            ></input>
            <table class="table table-striped">
                <thead >
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col" colspan="3">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">History</th>
                        <th scope="col">Exam</th>
                        <th scope="col">Diagnose</th>
                        <th scope="col">Prescribe</th>
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
                                    <td>
                                        <button onClick={()=>handleCheckId(patient.id)} type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#historyModal">History</button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#examModal">Pending</button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" disabled={true} data-bs-target="#diagnoseModal">Pending</button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#prescribeModal">Pending</button>
                                    </td>
                                    <td>

                                   </td>
                                </tr>
                                
                            );
                        })
                    }
                    
                    
                   
                </tbody>
            </table>
            { filterName().length != 0 ? 
            ( <Pagination patientNumber={filterName().length} setPage={setPage} /> ) : null
            }

            
            {/* ---- Modals ---- */}

            <Patienthistorymodsal patient={patients.filter(patient=> patient.id == patientId)} />
            <Exammodal />
            <Diagnosemodal />
            <Prescribemodal />
            

        </section>
    );
}

export default Consultation;
