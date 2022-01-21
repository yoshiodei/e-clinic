import React from 'react';

const Prescribemodal = () => {
    return (
        // Prescribe Modal
        <div class="modal fade " id="prescribeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-custom">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Medicine Prescription for Mr ...</h5>
            </div>
            <div class="modal-body">
                <div className='drug-count'>
                    <h6>Number of Medicines to Prescribe</h6>
                    <input class="form-control num-input-custom" type="number" aria-label="default input" />
                </div>
                <div className="medicines">
                    <div className=" drug__inner-div">
                        <div className="drug-div drug-div-space">
                            <h6 className='h6-custom'>Medicine</h6>
                            <select class="form-select " aria-label=".form-select-sm example">
                                <option selected>Paracetamol (50mg) Tablet</option>
                                <option value="1">Chloroquine (150mg) Tablet</option>
                                <option value="2">Tramadol (500mg) Tablet</option>
                                <option value="2">Penecilin (200mg) Tablet</option>
                            </select>
                        </div>
                        <div className="drug-div">
                            <h6 className='h6-custom' >Quantity</h6>
                            <input class="form-control mb-2" type="number" aria-label="default input example" />
                        </div>
                        <div className="drug-div">
                            <h6 className='h6-custom'>Daily Intake</h6>
                            <select class="form-select " aria-label=".form-select-sm example">
                                <option selected>OD</option>
                                <option value="1">BD</option>
                                <option value="2">IDS</option>
                                <option selected>QDS</option>
                                <option value="1">STAT</option>
                                <option value="2">OTHER</option>
                            </select>
                        </div>
                        <div className="drug-div">
                            <h6 className='h6-custom'>Duration in Days</h6>
                            <input class="form-control mb-2" type="number" aria-label="default input example"/>
                        </div>
                    </div>
                    <div className=" drug__inner-div">
                        <div className="drug-div drug-div-space">
                            <h6 className='h6-custom'>Medicine</h6>
                            <select class="form-select " aria-label=".form-select-sm example">
                                <option selected>Paracetamol (50mg) Tablet</option>
                                <option value="1">Chloroquine (150mg) Tablet</option>
                                <option value="2">Tramadol (500mg) Tablet</option>
                                <option value="2">Penecilin (200mg) Tablet</option>
                            </select>
                        </div>
                        <div className="drug-div">
                            <h6 className='h6-custom' >Quantity</h6>
                            <input class="form-control mb-2" type="number" aria-label="default input example" />
                        </div>
                        <div className="drug-div">
                            <h6 className='h6-custom'>Daily Intake</h6>
                            <select class="form-select " aria-label=".form-select-sm example">
                                <option selected>OD</option>
                                <option value="1">BD</option>
                                <option value="2">IDS</option>
                                <option selected>QDS</option>
                                <option value="1">STAT</option>
                                <option value="2">OTHER</option>
                            </select>
                        </div>
                        <div className="drug-div">
                            <h6 className='h6-custom'>Duration in Days</h6>
                            <input class="form-control mb-2" type="number" aria-label="default input example"/>
                        </div>
                    </div>
                </div> 
                <div className='diagnose-textarea'>
                    <div class="mb-3">
                        <h6 class="form-label">Prescription Comment</h6>
                        <textarea class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                    </div>
                    &nbsp;
                    &nbsp;
                    
                    <div class="mb-3">
                        <h6 class="form-label">Prescription Management Plan</h6>
                        <textarea class="form-control text-area-custom" id="complaint" rows="3" ></textarea>
                    </div>
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

export default Prescribemodal;
