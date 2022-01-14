import "./../styles/patient-info.css";

const Patientinfo = () => {
    return (
        <div className='patient-info'>
            <div className='patient-info__card patient-info__card--blue'>
                <div className="patient-info__icon-div"></div>
                <div className="patient-info__text-div">
                    <h4>patients</h4>
                    <h6>32</h6>
                </div>
            </div>
            <div className='patient-info__card patient-info__card--orange'>
            <div className="patient-info__icon-div"></div>
                <div className="patient-info__text-div">
                    <h4>women</h4>
                    <h6>16</h6>
                </div>
            </div>
            <div className='patient-info__card patient-info__card--yellow'>
            <div className="patient-info__icon-div"></div>
                <div className="patient-info__text-div">
                    <h4>men</h4>
                    <h6>11</h6>
                </div>
            </div>
            <div className='patient-info__card patient-info__card--green'>
            <div className="patient-info__icon-div"></div>
                <div className="patient-info__text-div">
                    <h4>children</h4>
                    <h6>5</h6>
                </div>
            </div>
        </div>
    );
}

export default Patientinfo;
