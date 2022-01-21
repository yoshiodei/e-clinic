import Diagnosemodal from "../components/Modals/DiagnoseModal";
import Exammodal from "../components/Modals/ExamModal";
import Patienthistorymodsal from "../components/Modals/PatientHistoryModsal";
import Prescribemodal from "../components/Modals/PrescribeModal";
import "./../styles/consultation.css";
const Consultation = () => {
    return (
        <section className='main-page-section'>
            <h4>CONSULTATION</h4>
            {/* <div class="alert alert-primary" role="alert">
                 This page displays the list of Patients selected to meet the doctor for consultation
            </div> */}
            <br/>
            <input class="form-control mb-2" type="text" placeholder="Type patient name to search" aria-label="default input example"></input>
            <table class="table table-striped">
                <thead >
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col" colspan="3">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">History</th>
                        <th scope="col">Exam</th>
                        <th scope="col">Diagnose</th>
                        <th scope="col">Prescribe</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <th scope="row">1</th>
                        <td colspan="3">Mary Jane</td>
                        <td>23</td>
                        <td>Female</td>
                        <td>
                             <button type="button" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#historyModal">History</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#examModal">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#diagnoseModal">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#prescribeModal">Pending</button>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td colspan="3">Aben Rose</td>
                        <td>45</td>
                        <td>Female</td>
                        <td>
                             <button type="button" class="btn btn-warning btn-sm">History</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="3">Calvin Kean</td>
                        <td>14</td>
                        <td>Male</td>
                        <td>
                             <button type="button" class="btn btn-warning btn-sm">History</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td colspan="3">Abena Korkor</td>
                        <td>39</td>
                        <td>Female</td>
                        <td>
                             <button type="button" class="btn btn-warning btn-sm">History</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td colspan="3">Richard Inkoom</td>
                        <td>62</td>
                        <td>Male</td>
                        <td>
                             <button type="button" class="btn btn-warning btn-sm">History</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-secondary btn-sm">Pending</button>
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation">
                    <ul class="pagination pagination-sm justify-content-end">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
            </nav>

            {/* ---- Modals ---- */}

            <Patienthistorymodsal />
            <Exammodal />
            <Diagnosemodal />
            <Prescribemodal />

            

        </section>
    );
}

export default Consultation;
