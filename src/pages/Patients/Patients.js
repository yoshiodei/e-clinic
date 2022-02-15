import React, { useState } from "react";
import "./Patients.css";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import Pagination from "../../components/Pagination";

const Patients = ({ patients }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [patientId, setPatientId] = useState("");

  const handleSend = () => {
    console.log("send clicked");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterName = () =>
    patients.filter((patient, index) =>
      patient.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

  const handleCheckId = (id) => {
    setPatientId(id);
    // console.log('your id is', id);
  };

  return (
    <div className="patients">
      <div className="patients_header">
        <h1 style={{ fontSize: 30 }}>PATIENTS</h1>
        <Button style={{ backgroundColor: "#20be74", border: "none" }}>
          Add Patient
        </Button>
      </div>
      <div className="patients_input">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Type Patient Name To Search"
        />
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
            {filterName().length === 0 ? (
              <div colspan="7" className="no-item">
                {" "}
                <h3>No item in list</h3>
              </div>
            ) : null}
            {filterName()
              .slice((page - 1) * 8, page * 8)
              .map((patient, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>Cash</td>
                    <td>
                      <button onClick={handleSend} className="tablebtns">
                        send
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      {filterName().length !== 0 ? (
        <Pagination patientNumber={filterName().length} setPage={setPage} />
      ) : null}
    </div>
  );
};

export default Patients;
