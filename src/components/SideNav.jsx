import "./../styles/side-nav.css";
import {Link} from 'react-router-dom';


const Sidenav = () => {
    return (
        <nav className='side-nav'>
            <div className="title-div">
                <h1>E-Clinic</h1>
            </div>
            
            <Link to='/'>
                <div className="item-div active">
                    <h5>Patients</h5>
                </div>    
            </Link>

            <Link to='/consultation'>   
                <div className="item-div">
                    <h5>Consultation</h5>
                </div>
            </Link>  
              
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
