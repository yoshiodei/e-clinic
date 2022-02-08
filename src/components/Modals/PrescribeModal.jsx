import {useState} from 'react';

const Prescribemodal = ({patient,updatePatientList}) => {

    const patientData = patient[0];

    let [medicineCount, setMedicineCount] = useState(1);
    const [data, setData] = useState({
        prescriptionComment: "",
        prescriptionPlan: ""
    });
    let [drugArray, setDrugArray] = useState([
        
             {
                name: "Tramadol (500mg) Tablet",
                id: "1",
                dailyIntake: "QDS",
                duration: 1,
                quantity: 1,    
            }
        ]);

    const resetPrescribeModal = () => {    
        setDrugArray([
        
            {
               name: "Tramadol (500mg) Tablet",
               id: "1",
               dailyIntake: "QDS",
               duration: 1,
               quantity: 1,    
           }
        ]);
        setData({
            prescriptionComment: "",
            prescriptionPlan: ""
        });
        setMedicineCount(1);    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            ...data,
            medicines: drugArray,
            prescriptionDone: true
        }
        
        updatePatientList(patientData.id, obj);
    
        resetPrescribeModal();

    }


    const handleChangeDrug = (e, med) => {
        let obj = { ...med, [e.target.name]: e.target.value };
        let newArray = drugArray.map(drug => drug.id == med.id ? obj : drug);
        setDrugArray(newArray);
        console.log("array after change", drugArray );
    }

    const handleAddDrug = () => {
        let drugObj = {
                name: "Tramadol (500mg) Tablet",
                id: Math.random().toString(),
                dailyIntake: "QDS",
                duration: 1,
                quantity: 1,    
            }
        setMedicineCount(++medicineCount);
        drugArray.push(drugObj);
    }

    const handleDelete = (id) => {
        console.log("button clicked", id);
        if(medicineCount > 1 && (id != undefined)){
            let newDrugArray = drugArray.filter( drug => drug.id != id );
            setDrugArray(newDrugArray);
            setMedicineCount(--medicineCount);
            // console.log("filter", newDrugArray);
        }
        else{
            console.log("can't delete item")
        }
    }

    const handleTextChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        console.log("text change", data);
    } 

    

    

    return (
        // Prescribe Modal
        <form onSubmit={(e)=>handleSubmit(e)} class="modal fade " id="prescribeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-custom modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Medicine Prescription for {patientData?.name}</h5>
                </div>
                <div class="modal-body">
                    <div className='drug-count'>
                        <h6>Number of Medicines to Prescribe</h6>
                        <input readOnly={true} class="form-control num-input-custom" aria-label="default input" value={medicineCount}/>
                        <button onClick={handleAddDrug} type="button" class="btn btn-primary custom-button">ADD</button>
                    </div>
                    <div className="medicines">
                        {
                        drugArray.map( drug => (
                            <div className=" drug__inner-div" key={drug.id}>
                                <div className="drug-div drug-div-space">
                                    <h6 className='h6-custom'>Medicine</h6>
                                    <select class="form-select" aria-label=".form-select-sm example"
                                     onChange={(e)=>handleChangeDrug(e, drug)} value={drug.name} name='name'>
                                        <option value="Paracetamol (50mg) Tablet">Paracetamol (50mg) Tablet</option>
                                        <option value="Chloroquine (150mg) Tablet">Chloroquine (150mg) Tablet</option>
                                        <option value="Tramadol (500mg) Tablet">Tramadol (500mg) Tablet</option>
                                        <option value="Penecilin (200mg) Tablet">Penecilin (200mg) Tablet</option>
                                    </select>
                                </div>
                                <div className="drug-div">
                                    <h6 className='h6-custom' >Quantity</h6>
                                    <input name='quantity' onChange={(e)=>handleChangeDrug(e, drug)} value={drug.quantity} class="form-control mb-2" type="number" min="1" aria-label="default input example" />
                                </div>
                                <div className="drug-div">
                                    <h6 className='h6-custom'>Daily Intake</h6>
                                    <select name='dailyIntake' onChange={(e)=>handleChangeDrug(e, drug)} value={drug.dailyIntake} class="form-select" aria-label=".form-select-sm example">
                                        <option selected value="OD" >OD</option>
                                        <option value="OB">BD</option>
                                        <option value="IDS">IDS</option>
                                        <option value="QDS">QDS</option>
                                        <option value="STAT">STAT</option>
                                        <option value="OTHER">OTHER</option>
                                    </select>
                                </div>
                                <div className="drug-div">
                                    <h6 className='h6-custom'>Duration in Days</h6>
                                    <input name='duration' class="form-control mb-2" onChange={(e)=>handleChangeDrug(e, drug)} value={drug.duration} type="number" min="1" aria-label="default input example"/>
                                </div>
                                <div className="drug-div drug-div-btn">
                                    <h6 className='h6-custom'>Remove</h6>
                                    <button type="button" onClick={()=>handleDelete(drug.id)}  class="btn btn-secondary">
                                         <i class="bi bi-trash-fill" ></i>
                                    </button>
                                </div>
                            </div>
                            )
                        )   
                        
                        }
                    </div> 
                    <div className='diagnose-textarea'>
                        <div class="mb-3">
                            <h6 class="form-label">Prescription Comment</h6>
                            <textarea name='prescriptionComment'  value={data.prescriptionComment}  onChange={(e)=>handleTextChange(e)} required class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                        </div>
                        &nbsp;
                        &nbsp;
                        
                        <div class="mb-3">
                            <h6 class="form-label">Prescription Management Plan</h6>
                            <textarea name='prescriptionPlan' value={data.prescriptionPlan} onChange={(e)=>handleTextChange(e)} required class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                        </div>
                    </div> 
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-secondary" onClick={resetPrescribeModal} data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </form>
    );
}

export default Prescribemodal;
