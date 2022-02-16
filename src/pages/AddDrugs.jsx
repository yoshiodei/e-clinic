import React from "react";

const Adddrugs = () => {
  return (
    <section className="main-page-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 Drugs">
            <h2 style={{ padding: 8 }}>Drugs Details</h2>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Genetic Name
              </label>
              <input
                class=" "
                type="text"
                placeholder="Genetic Name"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Strenght
              </label>
              <input
                class="gen-input"
                type="text"
                placeholder="Enter Drug strenght"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Type of Medicine
              </label>
              <select class="select" aria-label="Default select example">
                <option selected>Tablet</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Quantinty
              </label>
              <input
                class="gen-input"
                type="text"
                placeholder="Amount"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Purchased Price
              </label>
              <input
                class=""
                type="text"
                placeholder="Purchased Price"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Pre Marker
              </label>
              <input
                class=""
                type="text"
                placeholder="eg.1.5"
                aria-label=".form-control-sm example"
              />
            </div>
          </div>
          <div className="col-md-6 Drug-details">
            <h2>Vendor Details</h2>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Vendor FullName
              </label>
              <input
                style={{ width: 300 }}
                type="text"
                placeholder=" Vendor FullName"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Location
              </label>
              <input
                style={{ width: 360 }}
                type="text"
                placeholder="location"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Contact phone
              </label>

              <input
                style={{ width: 320 }}
                type="text"
                placeholder="Enter Vendor phone"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Vender email
              </label>
              <input
                style={{ width: 330 }}
                type="email"
                placeholder="Amount@"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Manufactured date
              </label>
              <input
                style={{ width: 290 }}
                type="date"
                placeholder="Manufactured date"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="mb-3" style={{ display: "flex" }}>
              <label for="exampleFormControlInput1" class=" label">
                Expire date
              </label>
              <input
                style={{ width: 350 }}
                type="date"
                placeholder="eg.1.5"
                aria-label=".form-control-sm example"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="submit-button">
        <button
          type="button"
          class="btn btn-success btn-sm clear-buttons "
          data-bs-toggle="modal"
          data-bs-target="#pharmacy"
        >
          SUBMIT
        </button>

        <button
          type="button"
          class="btn btn-success btn-sm clear-button"
          data-bs-toggle="modal"
          data-bs-target="#pharmacy"
        >
          CLEAR
        </button>
      </div>
    </section>
  );
};

export default Adddrugs;
