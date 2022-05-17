import {useState} from 'react';
import Testimagemodal from './TestImageModal';
import { connect } from 'react-redux';
import { updateConsult } from '../../redux/action';

const Diagnosemodal = ({patient, diseaseList, updateConsult, consultationPatientsList}) => {

    const patientData = patient[0];
    const [image, setImage] = useState('');

    const [patientTextData, setPatientTextData] = useState({
        diagnosis: "Malaria",
    });

    const [testFeedback, setTestFeedback] = useState({});
    

    const handleSubmit = (e) => {
        e.preventDefault();

        let temporalTestArray = [];
        let newPatientData = {};

        for(let obj in testFeedback){
            temporalTestArray.push( testFeedback[obj] );
        } 

        newPatientData = { ...patientData, ...patientTextData, tests: temporalTestArray, isDiagnosed: true, diagnosisDone: true };
        
        const newConsultArray = consultationPatientsList.map(consultationPatient => consultationPatient.id == newPatientData.id ? newPatientData : consultationPatient )

        updateConsult(newConsultArray);
        e.target.reset();
        
    }

    const openInnerModal = (e) => {
        setImage(e.target.name);
    }

    const handleChangeFeedback = (e, test) => {
        setTestFeedback({ ...testFeedback , [e.target.name] : { ...test, feedBack: e.target.value  }  });
        console.log( "test feedback data" , testFeedback);
    }

    const handleTextChange = (e) => {
        setPatientTextData({ ...patientTextData , [e.target.name] : e.target.value });
        // console.log("text data",patientTextData);
    }



    return (
     <>

        {/* //  Diagnose Modal  */}
    <form class="modal fade " id="diagnoseModal" onSubmit={(e)=>handleSubmit(e)} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-custom">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Diagnoses for {patient.length && patientData.name}</h5>
            </div>
            <div class="modal-body modal-body-custom">
                <div className="diagnose-test-div">
                    {
                     patientData?.tests   &&   
                    (patientData.tests.map(test => 
                    (
                     <>   
                    <div className="diagnose-test">
                            <div className="diagnose-test__div diagnose-test__name-div">
                                <h6 className='h6-custom'>Name</h6>
                                <p>{test.name}</p>
                            </div>
                            <div className="diagnose-test__div diagnose-test__img-div">
                                <h6 className='h6-custom' >Test Image</h6>
                                <button type="button" onClick={(e)=> openInnerModal(e)} name={test.testImage} class="btn btn-primary" data-bs-target="#imageModal" data-bs-toggle="modal">View Test Image</button>
                            </div>
                            <div className="diagnose-test__div diagnose-test__fb-div">
                                <h6 className='h6-custom'>Feedback</h6>
                                <input onChange={(e)=>{handleChangeFeedback(e,test)}} name={test.testId} class="form-control mb-2" required type="text" placeholder="enter feedback" aria-label="default input example" />
                            </div>
                        </div>
                        
                        </>
                        
                        )
                    ))
                    }
                </div>  
                <div className='diagnose-textarea'>
                    <div class="mb-3">
                        <h6 class="form-label">Lab Test Detail</h6>
                        <textarea name="labTestDetail" onChange={(e)=>handleTextChange(e)} required class="form-control text-area-custom" id="clinicalDetail" rows="3" ></textarea>
                    </div>
                    &nbsp;
                    &nbsp;
                    
                    <div class="mb-3">
                        <h6 class="form-label">Lab Test Comment</h6>
                        <textarea name="labTestComment" onChange={(e)=>handleTextChange(e)} required class="form-control text-area-custom" id="comment" rows="3" ></textarea>
                    </div>
                </div>
                <div>
                    <h6 class="form-label">Confirm Diagnose with Results from Examination</h6>
                    <select name="diagnosis" class="form-select" aria-label=".form-select-sm example" onChange={(e)=>handleTextChange(e)} >
                        {diseaseList.length &&
                        (diseaseList.map((disease, index)=>    
                        (<option value={disease.name} key={disease.id} >{disease.name}</option>)) )
                        }
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
            </div>
        </div>
    </form>


        <Testimagemodal image={image} />
</>
    );
}

const mapDispatchToProps = { updateConsult }

const mapStateToProps = (state) => {
    return {
       consultationPatientsList : state.consultation
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diagnosemodal);
