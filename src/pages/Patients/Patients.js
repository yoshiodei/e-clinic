import React from "react";
import "./Patients.css";
import { Button, ButtonGroup, Table } from "react-bootstrap";

const Patients = ({ name, age, gender, paymentMethod }) => {
  console.log(age);
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
            <tr>
              <td>1</td>
              <td>Mary Jane</td>
              <td>23</td>
              <td>Female</td>
              <td>Cash</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abena Korkor</td>
              <td>39</td>
              <td>Female</td>
              <td>NHIS</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Akwasi Bini</td>
              <td>13</td>
              <td>Male</td>
              <td>Cash</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Esther Owusua</td>
              <td>19</td>
              <td>Female</td>
              <td>Cash</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Jacob</td>
              <td>39</td>
              <td>Male</td>
              <td>NHIS</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>{name}</td>
              <td>40</td>
              <td>Male</td>
              <td>Cash</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Simon Adams</td>
              <td>54</td>
              <td>Male</td>
              <td>NHIS</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>James Wilson</td>
              <td>25</td>
              <td>Male</td>
              <td>Cash</td>
              <td>
                <button className="tablebtns">send</button>
              </td>
            </tr>
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
