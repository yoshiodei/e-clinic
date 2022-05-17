import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Recordmodal from '../components/Modals/RecordModal';
import Pagination from '../components/Pagination';
import { setRecordStatus } from '../redux/action';

const Recordpage = ({patients, setRecordStatus}) => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [patientId, setPatientId] = useState("");

    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
    
    const filterName = () => patients.filter((patient,index) =>  patient.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        setRecordStatus();
    }, []);

    return (
        <section className='main-page-section'>
            <div className='main-page-section__header-div'>
                <h4 >RECORDS</h4>
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
                        <th scope="col">Address</th>
                        <th scope="col">Consultation</th>    
                        <th scope="col">Exam</th>    
                        <th scope="col">History</th>  
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
                                    <td>{patient.address}</td>
                                    <td>Done</td>
                                    <td>Done</td>
                                    <td>
                                        {/* <button type="button" class="btn btn-secondary btn-sm custom-btn" data-bs-toggle="modal" data-bs-target="#historyModal">Receipt</button> */}
                                        <button onClick={()=> setPatientId(patient.id)} type="button" class="btn btn-warning btn-sm " data-bs-toggle="modal" data-bs-target="#historyModal">
                                            <i class="fas fa-folder-open" style={{color: "rgb(71, 71, 71)"}}></i>
                                        </button>
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

             <Recordmodal patient = {patients.filter(patient=> patient.id == patientId)} />
                
        </section>    
    );
}

const mapDispatchToProps = {setRecordStatus}

const mapStateToProps = (state) => {
    return {
        patients : state.record
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recordpage);
