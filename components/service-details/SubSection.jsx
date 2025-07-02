import React from "react";

const SubSection = () => {
  return (
    <div className="service-details-video">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="video-image pe-xxl-5">
            <img src="assets/img/service/details-2.jpg" alt="img" />
            <div className="video-box">
              <a
                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                className="video-button video-popup"
              >
                <i className="fas fa-play" />
                <i className="video-button-ripple" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="details-video-content ">
            <div className="section-title">
              <h2>We provide truly prominent solutions</h2>
              <p className="pt-4">
                Zotech is the partner of choice for many of the world’s leading
                enterprises,
              </p>
            </div>
            <div className="feedback">
              <div className="infu ">
                <img src="assets/img/about/06.png" alt="" />
                <h6>
                  Join our 50503+ <br /> Satisfied World Clients
                </h6>
              </div>
              <div className="infu">
                <div className="icon-box d-flex align-items-center">
                  <div className="icon">
                    <i className="flaticon-cms" />
                  </div>
                  <h6>Global Company</h6>
                </div>
                <p>
                  Our great team of more than to <br /> 1400 software experts
                  member.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
