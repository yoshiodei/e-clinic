import React from "react";
import "./PatientsRegistration.css";
import { Form, Button } from "react-bootstrap";

const Patientsregistration = () => {
  return (
    <div className="patient_registration">
      <h4 style={{ marginLeft: 10, marginBottom: 20 }}>
        PATIENT REGISTRATION FORM
      </h4>

      <div className="registration_form">
        <div className="left_registrationform">
          <h5 style={{ marginBottom: 20 }}>Personal Details</h5>
          <Form>
            <Form.Group
              className="mb-3 form-checkbox"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Prof." />
              <Form.Check type="checkbox" label="Dr." />
              <Form.Check type="checkbox" label="Mr." />
              <Form.Check type="checkbox" label="Mrs." />
              <Form.Check type="checkbox" label="Miss" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Other Names" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Other Names" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="date" placeholder="Date od Birth" />
            </Form.Group>
          </Form>
        </div>
        <div className="right_registrationform">
          <h5 style={{ marginBottom: 20 }}>Other Details</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Next of Kin" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Relationship</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="tel" placeholder="Next of Kin Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="tel" placeholder="Patient Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Payment Method</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="registration_buttons">
        <Button style={{ marginRight: 5 }} variant="success" size="sm">
          Subit
        </Button>{" "}
        <Button variant="success" size="sm">
          Nothing
        </Button>
      </div>
    </div>
  );
};

export default Patientsregistration;
