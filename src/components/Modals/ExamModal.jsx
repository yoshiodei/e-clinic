import { useState } from 'react';

const Exammodal = ({patient, examData, diseaseList}) => {
    

    const [radio, setRadio] = useState(false);
    
    const [data, setData] = useState({
        complaint: "",
        historyOfComplaint: "",
        diagnosis: "Malaria",
        isDiagnosed: false,
        tests:[],
    });

    const handleAddData = (e) =>{
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value, examDone: true});
        // console.log(data);
    }

    const handleCheckBoxClick = (e) => {
        if( e.target.checked ){
            let testObj = { 
                name: e.target.value,
                testImage: "test.jpg",
                testId: e.target.name
            }

            data.tests.push(testObj);

            setData({ 
                    ...data, 
                    tests: data.tests 
                });

        }

        else if( !e.target.checked ){

            let updatedTest = data.tests.filter(test => test.testId != e.target.name)
            
            setData({ 
                ...data, 
                tests: updatedTest 
            });
            // console.log("unchecked", updatedTest);
            // console.log("data", data)

            // delete data.tests[e.target.name];
            // console.log("deleted",data);
        }

    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        examData(patient[0].id, data);
        console.log("exam data",data);
        setData({
            complaint: "",
            historyOfComplaint: "",
            diagnosis: "Malaria",
            isDiagnosed: false,
            tests: []
        });
        setRadio(false);
        e.target.reset();
        
    }

    const handleRadioChangeTrue = () => {
        setRadio(true);
        setData({...data, isDiagnosed: true, diagnosisDone: true})
    }

    const handleRadioChangeFalse = () => {
        setRadio(false);
        setData({ ...data, diagnosis: "", isDiagnosed: false, diagnosisDone: false});
    }



    return (
        //  Exam Modal 
        <form  onSubmit={(e)=>handleSubmit(e)} class="modal fade " id="examModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-custom">
            
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Patient: {patient.length && patient[0].name}</h5>
            </div>
            <div class="modal-body">
                {/* <form onSubmit={handleSubmit}> */}
                    <div className="form-custom">
                    <div className="form-custom-div">
                        <div class="mb-3">
                            <h6 class="form-label">Presenting Complaint</h6>
                            <textarea onChange={(e)=>handleAddData(e)} required name="complaint" class="form-control text-area-custom" id="complaint" rows="3" value={data.complaint}  ></textarea>
                        </div>
                        <div class="mb-3">
                            <h6 class="form-label">History of Presenting Complaint</h6>
                            <textarea onChange={(e)=>handleAddData(e)} required name="historyOfComplaint" class="form-control text-area-custom" id="complaint"  rows="3" value={data.historyOfComplaint} ></textarea>
                        </div>
                    </div>
                    <div  style={{display: radio ? "none" : "block"}}>    
                        <h6>Choose Recommended Test</h6>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckDefault" onClick={(e)=> handleCheckBoxClick(e)}  name="randomBloodSugar" value="Random Blood Sugar" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Random Blood Sugar
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" onClick={(e)=> handleCheckBoxClick(e)}  name="fastingBloodSugar" value="Fasting Blood Sugar" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Fasting Blood Sugar
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" onClick={(e)=> handleCheckBoxClick(e)}  name="xRay" value="X-Ray"/>
                            <label class="form-check-label" for="flexCheckChecked">
                                 X-Ray
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" onClick={(e)=> handleCheckBoxClick(e)}  name="malariaDiagnosticTest" value="Malaria Diagnostic Test" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Malaria Diagnostic Test
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" onClick={(e)=> handleCheckBoxClick(e)}  name="ureaTest" value="Urea Test" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Urea Test
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked" onClick={(e)=> handleCheckBoxClick(e)}  name="tyroidFunction" value="Tyroid Function" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Tyroid Function
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  id="flexCheckChecked" onClick={(e)=> handleCheckBoxClick(e)}  name="generalBodyTest" value="General Body Test" />
                            <label class="form-check-label" for="flexCheckChecked">
                                    General Body Test
                            </label>
                        </div>
                        </div>
                    </div>
                    <div class="mb-3">
                            <div className='diagnose-div'>
                                <h6 class="form-label">Do you want to recommend diagnoses?</h6>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="diagnose" id="Radios1" value={radio} checked={radio} onClick={handleRadioChangeTrue} />
                                    <label class="form-check-label" for="Radios1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="diagnose" id="Radios1" value={radio} checked={!radio} onClick={handleRadioChangeFalse}/>
                                    <label class="form-check-label" for="Radios1">
                                        No
                                    </label>
                                </div>
                            </div>
                            
                            {/* <textarea style={{ display: radio ? "block" : "none" }} required={radio} class="form-control text-area-custom" id="complaint" rows="3"  name="diagnosis" value={data.diagnosis}></textarea> */}
                            <select name="diagnosis" value={radio ? data.diagnosis : ""} class="form-select" aria-label=".form-select-sm example" onChange={(e)=>handleAddData(e)} style={{ display: radio ? "block" : "none" }} >
                                {diseaseList.length &&
                                (diseaseList.map((disease, index)=>    
                                (<option selected={index == 0 ? true : false} value={disease.name} key={disease.id} >{disease.name}</option>)) )
                                }
                            </select>
                        </div>
                {/* </form> */}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" type="submit" >Submit</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
            </div>
            </div>
            
        </div>
        </form>
    );
}

export default Exammodal;
