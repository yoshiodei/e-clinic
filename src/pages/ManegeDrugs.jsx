import React, { useState } from "react";
import "./pharmacy.css";

import { FiEdit } from "react-icons/fi";

import Pharmacymodal from "./PharmarcyModal/pharmacyModel";
import Pagination from "../components/Pagination";

const Manegedrugs = ({ patients }) => {
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
          <h1 className="topic"> DRUGS AVALIABLE IN THE SYSTEM</h1>
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
                <th scope="col">Mafg</th>
                <th scope="col">Exp</th>
                <th scope="col">Avaliable</th>
                <th scope="col">Retail Price</th>
                <th scope="col">Eidth</th>
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
                      <td>{patient.mafg}</td>
                      <td>{patient.exp}</td>
                      <td>{patient.availiable}</td>
                      <td>{patient.retailprice}</td>
                      <td>
                        <FiEdit style={{ color: "blue" }} />
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
export default Manegedrugs;
