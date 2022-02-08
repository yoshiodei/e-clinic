import {useState} from 'react';
import Testimagemodal from './TestImageModal';

const Diagnosemodal = ({patient, diseaseList, updatePatientList}) => {

    const patientData = patient[0];
    const [image, setImage] = useState('');
    // const [feedBack, setFeedBack] = useState('');
    const [data, setData] = useState({
        labTestComment: "",
        clinicalDetail: "",
        diagnosis: "Malaria",
    });
    
    const [testResult, setTestResult] = useState({
        // [e.target.name]:{
        //     name: '',
        //     testImage: '',
        //     feedBack: feedBack
        //  }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {...data, testResult};
        updatePatientList(patientData.id, obj);
        setData({
            labTestComment: "",
            clinicalDetail: "",
            diagnosis: "Malaria",
        });
        setTestResult({});
        // console.log("submitted", obj);
    }

    const openInnerModal = (e) => {
        setImage(e.target.name);
    }

    const handleChangeFeedback = (e, t) => {
        e.preventDefault();
        let feedBack = e.target.value;
        setTestResult({...testResult,
             [e.target.name]:{
                                name: t.name,
                                testImage: t.testImage,
                                feedBack: feedBack
                             } })

        // console.log(testResult);
    }

    const handleAddData = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value, diagnosisDone: true});
        // console.log(data);
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
                                <input onChange={(e)=>{handleChangeFeedback(e,test)}} name={test.testId} class="form-control mb-2" required type="text" placeholder="enter feedback" aria-label="default input example"
                                value={testResult[test.testId]?.feedBack ? testResult[test.testId].feedBack : ""}
                                
                                ></input>
                            </div>
                        </div>
                        
                        </>
                        
                        )
                    ))
                    }
                </div>  
                <div className='diagnose-textarea'>
                    <div class="mb-3">
                        <h6 class="form-label">Clinical Detail</h6>
                        <textarea name="clinicalDetail" value={data.clinicalDetail} onChange={(e)=>handleAddData(e)} required class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                    </div>
                    &nbsp;
                    &nbsp;
                    
                    <div class="mb-3">
                        <h6 class="form-label">Lab Test Comment</h6>
                        <textarea name="labTestComment" value={data.labTestComment} onChange={(e)=>handleAddData(e)} required class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                    </div>
                </div>
                <div>
                    <h6 class="form-label">Confirm Diagnose with Resultsmand Examination</h6>
                    <select name="diagnosis" value={data.diagnosis} class="form-select" aria-label=".form-select-sm example" onChange={(e)=>handleAddData(e)} >
                        {diseaseList.length &&
                        (diseaseList.map((disease, index)=>    
                        (<option selected={index == 0 ? true : false} value={disease.name} key={disease.id} >{disease.name}</option>)) )
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

export default Diagnosemodal;
