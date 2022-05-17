import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Pharmacypagemodal from '../components/Modals/PharmacyPageModal';
import Pagination from '../components/Pagination';
import { addToRecords, setPharmacyStatus } from '../redux/action';

const Pharmacypage = ({pharmacyPatientList, addToRecords, patientTallyList, setPharmacyStatus}) => {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [patientId, setPatientId] = useState("");

    const handleChange = (e) =>{
        setSearch(e.target.value);
    }

    const sendToRecords = (pharmacyPatient) => {
        let newPharmacyPatientList = pharmacyPatientList.filter( patient => patient.id != pharmacyPatient.id );
        let newPatientTallyList = patientTallyList.filter( patient => patient.id != pharmacyPatient.id );
        addToRecords(pharmacyPatient, newPharmacyPatientList, newPatientTallyList);
    }
    
    const filterName = () => pharmacyPatientList.filter((patient,index) =>  patient.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        setPharmacyStatus();
    }, []);

    return (
        <section className='main-page-section'>
            <div className='main-page-section__header-div'>
                <h4 >PHARMACY</h4>
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
                        <th scope="col">Receipt</th>  
                        <th scope="col">Paid</th>  

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
                                    <td>
                                        <button type="button" class="btn btn-secondary btn-sm custom-btn" data-bs-toggle="modal" data-bs-target="#pharmacyModal" onClick={()=> setPatientId(patient.id)} >Receipt</button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-primary btn-sm custom-btn" onClick={()=> sendToRecords(patient) } >Send to records</button>
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

            <Pharmacypagemodal patient={pharmacyPatientList.filter(patient=> patient.id == patientId)} />


        </section>    
    );
}

const mapDispatchToProps = { addToRecords, setPharmacyStatus }

const mapStateToProps = (state) => {
    return {
        pharmacyPatientList : state.pharmacy,
        patientTallyList : state.patientsTally
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pharmacypage);
