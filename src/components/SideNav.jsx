import "./../styles/side-nav.css";

const Sidenav = () => {
    return (
        <nav className='side-nav'>
            <div className="title-div">
                <h1>E-Clinic</h1>
            </div>
            <div className="item-div active">
                <h5>Patients</h5>
            </div>    
            <div className="item-div">
                <h5>Consultation</h5>
            </div>    
            <div className="item-div">
                <h5>Examination</h5>
            </div>    
            <div className="item-div">
                <h5>Accounts</h5>
            </div>    
            <div className="item-div">
                <h5>Pharmacy</h5>
            </div>    
            <div className="item-div">
                <h5>Records</h5>
            </div>    
            <div className="item-div">
                <h5>Set up</h5>
            </div>    
        </nav>
    );
}

export default Sidenav;
