const ChooseUs = ({
  wrapperclass = "choose-us-wrapper choose-us-3 section-padding",
}) => {
  return (
    <section className={wrapperclass}>
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xl-6 col-lg-12 col-md-12 mt-xl-4 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="choose-us-content ms-xl-4 ps-xl-1">
              <div className="section-title">
                <div className="sub-title">
                  <span>WHY CHOOSE US</span>
                </div>
                <h2 className="split-text right">
                  Your Success, Our Commitment<br />
                  Why Indian Businesses Trust Jeevijay
                </h2>
              </div>
              <p className="mt-4">
                At Jeevijay Technologies, we’re more than just an IT company—we’re your technology partner. Our clients choose us for our honesty, expertise, and the way we treat every project as if it’s our own. We listen, we care, and we deliver solutions that make a real difference for your business.
              </p>
              <div className="reviews d-flex mt-4 pt-3">
                <div className="infu">
                  <img src="assets/img/why-choose/04.png" alt="satisfied clients" />
                  <h4>
                    Join 50,000+ businesses<br />who trust Jeevijay
                  </h4>
                </div>
                <div className="infu">
                  <div className="head d-flex align-items-center">
                    <div className="icon">
                      <i className="flaticon-world" />
                    </div>
                    <h4>Rooted in India, Serving Globally</h4>
                  </div>
                  <p>
                    Our passionate team brings together deep technical expertise and a genuine commitment to your growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="choose-us-images">
              <img className="shape-1" src="assets/img/world.png" alt="world shape" />
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4">
                  <div className="single-choose-item bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-graphic" />
                    </div>
                    <h4>Our Mission</h4>
                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-graphic" />
                      </div>
                      <h4>Our Mission</h4>
                      <p>
                        To empower Indian businesses with technology that’s simple, effective, and tailored to your unique journey. We’re here to help you grow, adapt, and lead.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 ">
                  <div className="single-choose-item bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt="shape-2"
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt="shape-3"
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-view" />
                    </div>
                    <h4>Our Vision</h4>
                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-view" />
                      </div>
                      <h4>Our Vision</h4>
                      <p>
                        To be the most trusted technology partner for businesses across India, known for our integrity, innovation, and results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4">
                  <div className="single-choose-item bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt="shape-2"
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt="shape-3"
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-rocket" />
                    </div>
                    <h4>Our Strategy</h4>
                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-rocket" />
                      </div>
                      <h4>Our Strategy</h4>
                      <p>
                        We combine deep industry knowledge with a hands-on, collaborative approach—so you get solutions that work in the real world, not just on paper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="single-choose-item bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt="shape-2"
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-wallet" />
                    </div>
                    <h4>Our Philosophy</h4>
                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-wallet" />
                      </div>
                      <h4>Our Philosophy</h4>
                      <p>
                        We believe in building long-term relationships, not just delivering projects. Your success is our success, and we’re with you every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUs;
