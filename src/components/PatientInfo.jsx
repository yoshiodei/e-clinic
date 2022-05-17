import "./../styles/patient-info.css";
import {connect} from 'react-redux';

const Patientinfo = ({patients}) => {

    return (
        <div className='patient-info'>
            <div className='patient-info__card patient-info__card--blue'>
                <div className="patient-info__icon-div">
                <i class="fas fa-users custom-icon"></i>
                </div>
                <div className="patient-info__text-div">
                    <h4>patients</h4>
                    <h6>{patients.length}</h6>
                </div>
            </div>
            <div className='patient-info__card patient-info__card--orange'>
            <div className="patient-info__icon-div">
            <i class="fas fa-female custom-icon"></i>
            </div>
                <div className="patient-info__text-div">
                    <h4>women</h4>
                    <h6>{patients.filter(patient => (patient.age > 14 && patient.gender == 'Female')).length}</h6>
                </div>
            </div>
            <div className='patient-info__card patient-info__card--yellow'>
            <div className="patient-info__icon-div">
            <i class="fas fa-male custom-icon"></i>
            </div>
                <div className="patient-info__text-div">
                    <h4>men</h4>
                    <h6>{patients.filter(patient => (patient.age > 14 && patient.gender == 'Male')).length}</h6>
                </div>
            </div>
            <div className='patient-info__card patient-info__card--green'>
            <div className="patient-info__icon-div">
            <i class="fas fa-child custom-icon"></i>
            </div>
                <div className="patient-info__text-div">
                    <h4>children</h4>
                    <h6>{patients.filter(patient => (patient.age <= 14 )).length}</h6>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { patients : state.patientsTally }
}

export default connect(mapStateToProps)(Patientinfo);
