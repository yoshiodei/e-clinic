import { useState } from 'react';
import { connect } from 'react-redux';
import { addNewPatient } from '../../redux/action';

const Newpatientmodal = ({addNewPatient}) => {

    const [newUser, setNewUser] = useState({});

    const handleOnchange = (e) => {
        setNewUser({...newUser, [e.target.name] : e.target.value });
        // let age = ((new Date().getTime() - new Date(newUser.dateOfBirth).getTime()) / (60*60*1000*24*365.25) )
    }

     const addNewUser = (e) => {
         e.preventDefault();
         let age = ((new Date().getTime() - new Date(`${newUser.dateOfBirth}`).getTime()) / (60*60*1000*24*365.25) );
         let name = `${newUser.firstName}${newUser.otherNames ? ` ${newUser.otherNames} ` : " " }${newUser.lastName}`
         let obj = { id: Math.random().toString() , ...newUser, age: parseInt(age), name };
        addNewPatient(obj);
        setNewUser({});
        document.getElementById("newPatientModal").reset();
     }

     const closeModal = () => {
        document.getElementById("newPatientModal").reset();
     }


    return (
        <form onSubmit={(e)=>addNewUser(e)} class="modal fade " id="newPatientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-custom modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add New Patient</h5>
                    </div>
                
                    <div class="modal-body modal-body--flex">
                        <div className="modal-body__title-div">
                            <h6>Personal Details</h6>
                            <div className="modal-body__inner-title-div">
                                <div>
                                    <input type="radio" required id="prof" name="title" value="Prof." onChange={(e)=> handleOnchange(e)} />
                                    <label htmlFor='prof'> {" Prof."}</label>
                                </div>
                                <div>
                                    <input type="radio" required id="dr" name="title" value="Dr." onChange={(e)=> handleOnchange(e)} />
                                    <label htmlFor='dr'> {" Dr."}</label>
                                </div>
                                <div>
                                    <input type="radio" required id="mr" name="title" value="Mr." onChange={(e)=> handleOnchange(e)} />
                                    <label htmlFor='mr'> {" Mr."}</label>
                                </div>
                                <div>
                                    <input type="radio" required id="mrs" name="title" value="Mrs." onChange={(e)=> handleOnchange(e)} />
                                    <label htmlFor='mrs'> {" Mrs."}</label>
                                </div>
                                <div>
                                    <input type="radio"required id="miss" name="title" value="Miss" onChange={(e)=> handleOnchange(e)} />
                                    <label htmlFor='miss'> {" Miss"}</label>
                                </div>
                            </div>
                            <input placeholder='First Name' required name="firstName" className='modal-body__left-input' onChange={(e)=> handleOnchange(e)} />
                            <input placeholder='Other Names' name="otherNames" className='modal-body__left-input' onChange={(e)=> handleOnchange(e)} />
                            <input placeholder='Last Name' required name="lastName" className='modal-body__left-input' onChange={(e)=> handleOnchange(e)} />
                            <select  className='modal-body__left-input' required name="gender" onChange={(e)=> handleOnchange(e)}>
                                <option>-- Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>    
                            <input required type="date" placeholder='Date of Birth' name="dateOfBirth" className='modal-body__left-input' onChange={(e)=> handleOnchange(e)} />
                        </div>
                        <div className="modal-body__title-div modal-body__title-div--right">
                            <h6>Other Details</h6>
                            <input placeholder='Address' required className='modal-body__left-input' name="address" onChange={(e)=> handleOnchange(e)} />
                            <input placeholder='Next of Kin' required className='modal-body__left-input' name="nextOfKin" onChange={(e)=> handleOnchange(e)} />
                            <input placeholder='Relationship with Next of Kin' required name="relationshipWithNextOfKin" className='modal-body__left-input' onChange={(e)=> handleOnchange(e)} />
                            <input placeholder='Next of Kin Phone Number' required name="nextOfKinPhoneNumber" className='modal-body__left-input' onChange={(e)=> handleOnchange(e)} />
                            <input placeholder='Patient Phone Number' required name="phoneNumber" className='modal-body__left-input' onChange={(e)=> handleOnchange(e)} />
                            <select  className='modal-body__left-input' required name="paymentMethod" onChange={(e)=> handleOnchange(e)}>
                                <option>-- Payment Type</option>
                                <option value="Cash">Cash</option>
                                <option value="NHIS">NHIS</option>
                            </select> 
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="button" class="btn btn-secondary" onClick={closeModal} data-bs-dismiss="modal">Close</button>
                    </div>
            </div>    
            </div>    
        </form>
    );
}

const mapDispatchToProps = { addNewPatient }

export default connect(null, mapDispatchToProps)(Newpatientmodal);
