import React from 'react'

const Office = () => {
  return (
    <>
      <div className="fs-1 mt-5 mb-5 text-center fw-bold ">Our Offices</div>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow-sm rounded-3 h-100 small">
            <div className="card-body d-flex flex-column gap-2 p-3">
              <div className="d-flex gap-3 align-items-start">
                <i className="flaticon-location fs-3 text-primary"></i>
                <div>
                  <h5 className="card-title mb-1">Kota</h5>
                  <p className="card-text text-muted mb-2">
                    22, Second floor Behind Modern Petrol Pump, Aerodrome Near
                    Gumanpura Police Station, Kota Rajasthan (324007)
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/Jeevijay+Technologies+22,Second+floor+Behind+Modern+Petrol+Pump+Aerodrome+Near+Gumanpura+Police+Station+Kota+rajasthan+(324007)/@25.1689794,75.844218,16z?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-auto"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow-sm rounded-3 h-100 small">
            <div className="card-body d-flex flex-column gap-2 p-3">
              <div className="d-flex gap-3 align-items-start">
                <i className="flaticon-location fs-3 text-primary"></i>
                <div>
                  <h5 className="card-title mb-1">Bangalore</h5>
                  <p className="card-text text-muted mb-2">
                    White Field, HN - 1 , Sai Colony Extension, Belathur,
                    Kadugodi, Bengaluru, Karnataka 560067
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Jeevijay+Technologies+Bengaluru/@13.000097,77.7551825,15.75z/data=!4m6!3m5!1s0x3bae0f1360dabf6f:0xcc68f848662e24b9!8m2!3d13.0009059!4d77.7555243!16s%2Fg%2F11wvrbcc00?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-auto"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow-sm rounded-3 h-100 small">
            <div className="card-body d-flex flex-column gap-2 p-3">
              <div className="d-flex gap-3 align-items-start">
                <i className="flaticon-location fs-3 text-primary"></i>
                <div>
                  <h5 className="card-title mb-1">Bhopal</h5>
                  <p className="card-text text-muted mb-2">
                    Shop No. 110, Neelkamal Complex, opposite Manohar Dairy, MP Nagar, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/bAwYk5XYDt5S4kSS9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-auto"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow-sm rounded-3 h-100 small">
            <div className="card-body d-flex flex-column gap-2 p-3">
              <div className="d-flex gap-3 align-items-start">
                <i className="flaticon-location fs-3 text-primary"></i>
                <div>
                  <h5 className="card-title mb-1">Jabalpur</h5>
                  <p className="card-text text-muted mb-2">
                    A – 01 Anmol Vatika Ground Floor Karmeta Road, Jabalpur
                    Madhya Pradesh (482002)
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Jeevijay+Technologies+Jabalpur/@23.1982214,79.8927606,17z/data=!3m1!4b1!4m6!3m5!1s0x3981b192d2e29e07:0xc20fd02fc904df9c!8m2!3d23.1982165!4d79.8953355!16s%2Fg%2F11w4kjtcl4?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-auto"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Office
