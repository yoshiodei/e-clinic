import React, { useState } from "react";
import "./PatientInfoModal.css";
import { Button, Modal, Table } from "react-bootstrap";

const Patientinfomodal = () => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
          Full screen
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>E-Clinic</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex" }}>
          <div className="modalbody-left"></div>
          <div className="modalbody-middle">
            <p>Thursday, 22 June 2022</p>
            <Table striped bordered hover>
              <thead className="table-header">
                <tr>
                  <th colSpan={3}>Patient Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>Date of Birth</td>
                  <td>Gender</td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>28-07-1983</td>
                  <td>Male</td>
                </tr>
              </tbody>
              <thead className="table-header">
                <tr>
                  <th colSpan={3}>Complaint</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Presenting Complaint</td>
                  <td colSpan={2}>History of Presenting Complaint</td>
                </tr>
                <tr>
                  <td>.</td>
                  <td colSpan={2}>.</td>
                </tr>
              </tbody>
              <thead className="table-header">
                <tr>
                  <th colSpan={3}>Medical Treatment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cost</td>
                  <td colSpan={2}>Prescription</td>
                </tr>
                <tr>
                  <td>2 x Ghc 45.00</td>
                  <td colSpan={2}>Paracetamol (50mg) 2 (Tablet)(OD)2 days</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan={3}>.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total</td>
                  <td colSpan={2}>Comment</td>
                </tr>
                <tr>
                  <td>Ghc 90.00</td>
                  <td colSpan={2}>Sample Comment</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="modalbody-right">
            <button
              className="right-btn"
              style={{ backgroundColor: "skyblue" }}
            ></button>
            <button className="right-btn"></button>
            <Button className="send-btn" variant="primary" size="sm">
              Send to Pharmacy
            </Button>{" "}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Patientinfomodal;
