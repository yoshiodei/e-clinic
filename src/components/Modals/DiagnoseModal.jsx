import React from 'react';

const Diagnosemodal = () => {
    return (
        //  Diagnose Modal 
        <div class="modal fade " id="diagnoseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-custom">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Diagnoses for Mr ...</h5>
            </div>
            <div class="modal-body modal-body-custom">
                <div className="diagnose-test-div">
                    <div className="diagnose-test">
                        <div className="diagnose-test__div diagnose-test__name-div">
                            <h6 className='h6-custom'>Name</h6>
                            <p>Random Blood Sugar Test</p>
                        </div>
                        <div className="diagnose-test__div diagnose-test__img-div">
                            <h6 className='h6-custom' >Test Image</h6>
                            <button type="button" class="btn btn-primary ">View Test Image</button>
                        </div>
                        <div className="diagnose-test__div diagnose-test__fb-div">
                            <h6 className='h6-custom'>Feedback</h6>
                            <input class="form-control mb-2" type="text" placeholder="" aria-label="default input example"></input>
                        </div>
                    </div>
                    <div className="diagnose-test">
                        <div className="diagnose-test__div diagnose-test__name-div">
                            <h6 className='h6-custom'>Name</h6>
                            <p>Full Blood Count Test</p>
                        </div>
                        <div className="diagnose-test__div diagnose-test__img-div">
                            <h6 className='h6-custom' >Test Image</h6>
                            <button type="button" class="btn btn-primary">View Test Image</button>
                        </div>
                        <div className="diagnose-test__div diagnose-test__fb-div">
                            <h6 className='h6-custom'>Feedback</h6>
                            <input class="form-control mb-2" type="text" placeholder="" aria-label="default input example"/>
                        </div>
                    </div>
                </div>  
                <div className='diagnose-textarea'>
                    <div class="mb-3">
                        <h6 class="form-label">Clinical Detail</h6>
                        <textarea class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                    </div>
                    &nbsp;
                    &nbsp;
                    
                    <div class="mb-3">
                        <h6 class="form-label">Lab Test Comment</h6>
                        <textarea class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                    </div>
                </div>
                <div>
                    <h6 class="form-label">Confirm Diagnose with Resultsmand Examination</h6>
                    <select class="form-select" aria-label=".form-select-sm example">
                        <option selected>Malaria</option>
                        <option value="1">Hepatis</option>
                        <option value="2">Measles</option>
                        <option value="3">Fever</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
            </div>
        </div>
        </div>
    );
}

export default Diagnosemodal;
