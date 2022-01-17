import React from "react";
import "./Accounts.css";
import { Table, ButtonGroup, Button } from "react-bootstrap";

const Accounts = () => {
  return (
    <div className="accounts">
      <h3 style={{ margin: "10px 0px" }}>Accounts</h3>
      <div className="accounts_input">
        <input placeholder="Type Patient Name To Search" />
      </div>
      <div className="accounts_table">
        <Table striped bordered hover>
          <thead>
            <tr style={{ backgroundColor: "grey", color: "white" }}>
              <th></th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Scheme</th>
              <th>Cash</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mary Jane</td>
              <td>23</td>
              <td>Female</td>
              <td>Amasaman</td>
              <td>
                <button></button>
              </td>
              <td>
                <button></button>
              </td>
              <td>
                <button style={{ backgroundColor: "grey" }}></button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="accounts_progress-steps">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">Previous</Button>
          <Button variant="secondary">Next</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Accounts;
