import React from 'react';

const Accountpagemodal = ({patient}) => {
    

 // gets todays date
 let today = new Date();
 let patientData = patient[0];

 const handlePrint = () => {
     window.print();
 }

 return (
     //  Patient History Modal 
     <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered modal-fullscreen history-modal">
         <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="exampleModalLabel">Patient Receipt</h4>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
             <h5>{today.toDateString()}</h5>
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
                         <td>{patientData?.name ? patientData.name : "None"}</td>
                         <td>{patientData?.dateOfBirth ? patientData.dateOfBirth : "None"}</td>
                         <td>{patientData?.gender ? patientData.gender : "None"}</td>
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
                         <td>{patientData?.complaint ? patientData.complaint : "None"}</td>
                         <td colspan="2">{patientData?.historyOfComplaint ? patientData.historyOfComplaint : "None"}</td>
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
                         <th scope="col">Cost</th>
                         <th scope="col">Total</th>

                     </tr>
                 </thead>
                 <tbody class="remove-bordertop">
                     <tr>
                         <td>{patientData?.diagnosis ? patientData.diagnosis : "None"}</td>
                         <td colspan="2">
                             {
                                 patientData?.drugPrescription && patientData.drugPrescription.map( ( med, index )=> (
                                    <p key={index}>{med.name}</p>  
                                 ))
                             }
                             {
                                 !patientData?.drugPrescription && "None"
                             }
                         </td>
                         <td>
                             {
                                 patientData?.drugPrescription && patientData.drugPrescription.map( ( med, index )=> (
                                    <p key={index}>{`Gh¢ 15 x ${med.quantity}`}</p>  
                                 ))
                             }
                             {
                                 !patientData?.drugPrescription && "None"
                             }
                         </td>
                         <td>
                            {
                                 patientData?.drugPrescription && (`Gh¢ ${patientData.drugPrescription.reduce( ( acc, med )=> (
                                    acc + (15 * med.quantity) 
                                 ),0 )}.00`)
                             }
                             {
                                 !patientData?.drugPrescription && "None"
                             }
                         </td>
                     </tr>
                 </tbody>
             </table>
             <div class="alert alert-custom" role="alert">
                   Comment
             </div>
             <table class="table table-bordered">
                 <thead class="thead-custom">
                     <tr>
                         <th scope="col">Prescription Comment</th>
                         <th scope="col">Prescription Plan</th>
                     </tr>
                 </thead>
                 <tbody class="remove-bordertop">
                     <tr>
                         <td>{patientData?.prescriptionComment ? patientData.prescriptionComment : "None"}</td>
                         <td>{patientData?.prescriptionPlan ? patientData.prescriptionPlan : "None"}</td>
                     </tr>
                 </tbody>
             </table>    
         </div>
         <div class="modal-footer">
             <button type="button" class="btn btn-success" onClick={handlePrint} >Print</button>
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         </div>
     </div>
     </div>
     </div>
 );
}


export default Accountpagemodal;

