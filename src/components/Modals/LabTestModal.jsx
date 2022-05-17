import { useState } from 'react';
import "./../../styles/labTest.css";
import { connect } from 'react-redux';
import { updateExam } from '../../redux/action';

const Labtestmodal = ({patient, updateExam, examPatientList }) => {
    
    let patientData = patient[0];
    console.log(patientData);
    const [testDataObj, setTestDataObj] = useState({});
    const [textObj, setTextObj] = useState({});

    const hanndleTestChange = (e,test) => {
        setTestDataObj({ ...testDataObj ,[test.testId]: { ...testDataObj[test.testId] , ...test, [e.target.name]: e.target.value} });
        // console.log("data obj", testDataObj);
    }

    const handleTextChange = (e) => {
        setTextObj({[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        let temporalTestArray = [];
        let newPatientData = {};

        for(let obj in testDataObj){
            temporalTestArray.push( testDataObj[obj] );
        } 

        let newExamPatientList = examPatientList.filter(examPatient => examPatient.id != patientData.id);
        
        newPatientData = { ...patientData, ...textObj, tests: temporalTestArray, diagnosis: "" };
        // console.log("newPatientData",newPatientData);

        updateExam(newPatientData, newExamPatientList);
        e.target.reset();
    }


    return (
        //  Exam Modal 
        <form  onSubmit={(e)=>handleSubmit(e)} class="modal fade " id="testModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-custom modal-custom modal-dialog-scrollable">
            
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{`Patient: ${patientData?.name}` }</h5>
            </div>
            <div class="modal-body">
                    {patientData?.tests.map( (test, index) => (
                        <div className="test-div" key={test.testId} >
                            <div className="test-div-input-div">
                                <h6 class="form-label">Test</h6>
                                <input readOnly value={test.name} className='test-input'/>
                            </div>
                            <div className="test-div-input-div">
                                <h6 class="form-label">Result Image</h6>
                                <input type="file" name='testImage' onChange={(e)=>{ hanndleTestChange(e,test) }}  />
                            </div>
                            <div className="test-div-input-div">
                                <h6 class="form-label">Comment</h6>
                                <input placeholder='Result comment' name='testComment' required onChange={(e)=>{ hanndleTestChange(e,test) }} />
                            </div>
                        </div>
                     )
                    )
                    } 

                    <div className="form-custom form-custom--text-div">
                            <div class=" text-div">
                                <h6 class="form-label">Clinical Detail</h6>
                                <textarea onChange={(e)=>handleTextChange(e)} required name="clinicalDetail" class="form-control text-area-custom" id="complaint" rows="3"   ></textarea>
                            </div>
                            <div class=" text-div">
                                <h6 class="form-label">General Comment</h6>
                                <textarea onChange={(e)=>handleTextChange(e)} required name="generalComment" class="form-control text-area-custom" id="complaint"  rows="3"  ></textarea>
                            </div>
                    </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" type="submit" >Send Test</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
            </div>
            </div>
            
        </div>
        </form>
    );
}

let mapDispatchToProps = { updateExam }

let mapStateToProps = (state) => {
   return { examPatientList : state.examination }
}

export default connect(mapStateToProps, mapDispatchToProps)(Labtestmodal);
