import React from 'react';

const Patienthistorymodsal = () => {
    return (
        //  Patient History Modal 
        <div class="modal fade" id="historyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-fullscreen history-modal">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">=Patient History</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Monday, 17 January 2022</h5>
                <div class="alert alert-custom" role="alert">
                      Patient Infromation
                </div>
                <table class="table table-bordered">
                    <thead class="thead-custom">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody class="remove-bordertop">
                        <tr>
                            <td>Melvin Doe</td>
                            <td>28-07-1983</td>
                            <td>Male</td>
                        </tr>
                    </tbody>
                </table>


                <div class="alert alert-custom" role="alert">
                      Complaint
                </div>
                <table class="table table-bordered">
                    <thead class="thead-custom">
                        <tr>
                            <th scope="col">Presenting Complaint</th>
                            <th scope="col" colspan="2">History of Presenting Complaint</th>
                        </tr>
                    </thead>
                    <tbody class="remove-bordertop">
                        <tr>
                            <td>None</td>
                            <td colspan="2">None</td>
                        </tr>
                    </tbody>
                </table>


                <div class="alert alert-custom" role="alert">
                      Medical Treatment
                </div>
                <table class="table table-bordered">
                    <thead class="thead-custom">
                        <tr>
                            <th scope="col">Diagnose</th>
                            <th scope="col" colspan="2">Prescription</th>
                        </tr>
                    </thead>
                    <tbody class="remove-bordertop">
                        <tr>
                            <td>None</td>
                            <td colspan="2">None</td>
                        </tr>
                    </tbody>
                </table>
                <div class="alert alert-custom" role="alert">
                      Management Plan
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" >Print</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Patienthistorymodsal;
