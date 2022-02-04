import React, { useState } from "react";
import "./pharmacy.css";
import { AiOutlineCheck } from "react-icons/ai";
import { BsPersonFill, BsEyedropper } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

import Pharmacymodal from "./PharmarcyModal/pharmacyModel";
import Pagination from "../components/Pagination";

const Pharmacy = ({ patients }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [patientId, setPatientId] = useState("");

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
    <section className="main-page-section">
      <>
        <div>
          <h1 className="topic"> PHARMACY</h1>
          <input
            class="form-control mb-2"
            type="text"
            placeholder="Type patient name to search"
            value={search}
            aria-label="default input example"
            onChange={handleChange}
          ></input>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Consultion</th>
                <th scope="col">Exam</th>
                <th scope="col">Reciept</th>
              </tr>
            </thead>
            <tbody style={{ position: "relative" }}>
              {filterName().length === 0 ? (
                <div colspan="7" className="no-item">
                  {" "}
                  <h3>No item in list</h3>
                </div>
              ) : null}
              {filterName()
                .slice((page - 1) * 5, page * 5)
                .map((patient, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{1 + index + (page - 1) * 5}</th>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.address}</td>
                      <td>
                        <div>
                          <AiOutlineCheck className="icon" />
                          <BsPersonFill
                            className="icon"
                            style={{ color: "blue" }}
                          />
                        </div>
                      </td>
                      <td>
                        <GrFormClose className="icon" />
                        <BsEyedropper
                          className="icon"
                          style={{ color: "green" }}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => handleCheckId(patient.id)}
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#pharmacy"
                        >
                          Reciept
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {filterName().length !== 0 ? (
            <Pagination patientNumber={filterName().length} setPage={setPage} />
          ) : null}
        </div>
        <Pharmacymodal
          patient={patients.filter((patient) => patient.id === patientId)}
        />
        <Pagination />
      </>
    </section>
  );
};

export default Pharmacy;
