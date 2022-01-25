import React from "react";
import "./Patients.css";
import { Button, ButtonGroup, Table } from "react-bootstrap";

const Patients = ({ patients }) => {
  return (
    <div className="patients">
      <div className="patients_header">
        <h1 style={{ fontSize: 30 }}>PATIENTS</h1>
        <Button style={{ backgroundColor: "#20be74", border: "none" }}>
          Add Patient
        </Button>
      </div>
      <div className="patients_input">
        <input placeholder="Type Patient Name To Search" />
      </div>
      <div className="patients_table">
        <Table striped bordered hover size="sm">
          <thead>
            <tr style={{ backgroundColor: "grey", color: "white" }}>
              <th></th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Payment</th>
              <th>Consultation</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>Cash</td>
                <td>
                  <button className="tablebtns">send</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="progress_step">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">Previous</Button>
          <Button variant="secondary">Next</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Patients;
