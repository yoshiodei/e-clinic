import React from "react";
import "./Patients.css";
import { Button, ButtonGroup, ButtonToolbar, Table } from "react-bootstrap";

const Patients = () => {
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
            <tr>
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
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abena Korkor</td>
              <td>39</td>
              <td>Female</td>
              <td>NHIS</td>
              <td>
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Akwasi Bini</td>
              <td>13</td>
              <td>Male</td>
              <td>Cash</td>
              <td>
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Esther Owusua</td>
              <td>19</td>
              <td>Female</td>
              <td>Cash</td>
              <td>
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Jacob</td>
              <td>39</td>
              <td>Male</td>
              <td>NHIS</td>
              <td>
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>John Doe</td>
              <td>40</td>
              <td>Male</td>
              <td>Cash</td>
              <td>
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Simon Adams</td>
              <td>54</td>
              <td>Male</td>
              <td>NHIS</td>
              <td>
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>James Wilson</td>
              <td>25</td>
              <td>Male</td>
              <td>Cash</td>
              <td>
                <Button
                  className="consultation_button"
                  variant="primary"
                  size="sm"
                >
                  send
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="progress_step">
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
            <Button>4</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Patients;
