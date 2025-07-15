import React from 'react'

function Brokerage() {
    return ( 
        <div className="container my-5">
      <h2 className="mt-5 mb-5 fw-bold">Charges for account opening</h2>
      <div className="mt-5 mb-5 table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">Type of account</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td><span className="badge bg-success">FREE</span></td>
            </tr>
            <tr className="table-light">
              <td>Offline account</td>
              <td><span className="badge bg-success">FREE</span></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr className="table-light">
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-5 mb-4 fw-bold">Charges for optional value added services</h2>
      <div className="mt-5 table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">
Service</th>
              <th scope="col">Billing Frquency</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr className="table-light">
              <td>Smallcase</td>
              <td>	Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
     );
}

export default Brokerage;