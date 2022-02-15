import React, { useState } from "react";
import "./PatientsRegistration.css";
import { Form, Button } from "react-bootstrap";

const Patientsregistration = ({ addNewPatient }) => {
  const calcAge = getAge(patientsInput.dateOfBirth);
  const [patientsInput, setPatientsInput] = useState({
    id: 1,
    name: "",
    dateOfBirth: "",
    age: calcAge(),
    gender: "",
    address: "",
    phoneNumber: "",
    paymentMethod: "",
    nextofKin: "",
    kinphoneNumber: "",
  });

  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  console.log("age: " + getAge(patientsInput.dateOfBirth));

  const handleChange = (e) => {
    setPatientsInput({ ...patientsInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientsInput);
    addNewPatient(patientsInput);

    setPatientsInput({
      name: "",
      dateOfBirth: "",
      age: "",
      gender: "",
      address: "",
      phoneNumber: "",
      paymentMethod: "",
      nextofKin: "",
      kinphoneNumber: "",
    });
  };

  return (
    <div className="patient_registration">
      <h4 style={{ marginLeft: 10, marginBottom: 20 }}>
        PATIENT REGISTRATION FORM
      </h4>

      <div className="registration_form">
        <div className="left_registrationform">
          <h5 style={{ marginBottom: 20 }}>Personal Details</h5>
          <Form>
            <Form.Check type="radio" label="Prof." name="group2" id="radio1" />
            <Form.Check type="radio" label="Dr." name="group2" id="radio1" />
            <Form.Check type="radio" label="Miss" name="group2" id="radio1" />
            <Form.Check type="radio" label="Mr." name="group2" id="radio2" />
            <Form.Check type="radio" label="Mrs." name="group2" id="radio3" />
            <Form.Group className="mb-3">
              <Form.Control
                style={{ marginTop: 20 }}
                value={patientsInput.name}
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                value={patientsInput.dateOfBirth}
                onChange={handleChange}
                name="dateOfBirth"
                type="date"
                placeholder="Date od Birth"
              />
            </Form.Group>
          </Form>
        </div>
        <div className="right_registrationform">
          <h5 style={{ marginBottom: 20 }}>Other Details</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                value={patientsInput.address}
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                value={patientsInput.nextofKin}
                onChange={handleChange}
                name="nextofKin"
                type="text"
                placeholder="Next of Kin"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>Relationship</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                value={patientsInput.kinphoneNumber}
                onChange={handleChange}
                name="kinphoneNumber"
                type="tel"
                placeholder="Next of Kin Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                value={patientsInput.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                type="tel"
                placeholder="Patient Phone Number"
              />
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
        <Button
          onClick={handleSubmit}
          style={{ marginRight: 5 }}
          variant="success"
          size="sm"
        >
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
