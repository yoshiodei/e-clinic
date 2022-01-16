import React from 'react';

const Exammodal = () => {
    return (
        //  Exam Modal 
        <div class="modal fade " id="examModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-custom">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Patient: Mr ...</h5>
            </div>
            <div class="modal-body">
                <form className="form-custom">
                    <div className="form-custom-div">
                        <div class="mb-3">
                            <h6 class="form-label">Presenting Complaint</h6>
                            <textarea class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                        </div>
                        <div class="mb-3">
                            <h6 class="form-label">History of Presenting Complaint</h6>
                            <textarea class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                        </div>
                    </div>
                    <div>    
                        <h6>Choose Recommended Test</h6>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Random Blood Sugar
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                Fasting Blood Sugar
                            </label>
                        </div>
                    </div>
                </form>
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

export default Exammodal;
