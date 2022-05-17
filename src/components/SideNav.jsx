import "./../styles/side-nav.css";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";

const Sidenav = ({state}) => {
    return (
        <nav className='side-nav'>
            <div className="title-div">
                <h1>E-Clinic </h1>
            </div>
            
            <Link to='/'>
                <div className="item-div active">
                    <h5>Patients </h5>
                    {state.patientsHasNewItem && (<span class="badge bg-light">{state.patients.length}</span>)}
                </div>    
            </Link>

            <Link to='/consultation'>   
                <div className="item-div">
                    <h5>Consultation</h5>
                    {state.consultationHasNewItem && (<span class="badge bg-light">{state.consultation.length}</span>)}
                </div>
            </Link> 

            <Link to='/examination'>   
                <div className="item-div">
                    <h5>Examination</h5>
                    {state.examinationHasNewItem && (<span class="badge bg-light">{state.examination.length}</span>)}
                </div>
            </Link>  
              
            <Link to='/accounts'>   
                <div className="item-div">
                    <h5>Accounts</h5>
                    {state.accountHasNewItem && (<span class="badge bg-light">{state.account.length}</span>)}
                </div> 
            </Link>   

            <Link to='/pharmacy'>   
                <div className="item-div">
                    <h5>Pharmacy</h5>
                    {state.pharmacyHasNewItem && (<span class="badge bg-light">{state.pharmacy.length}</span>)}
                </div>
            </Link>   

            <Link to='/records'>   
                <div className="item-div">
                    <h5>Records</h5>
                    {state.recordHasNewItem && (<span class="badge bg-light">{state.record.length}</span>)}
                </div>
            </Link>    
                  
            <div className="item-div">
                <h5>Set up</h5>
            </div>    
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Sidenav);
