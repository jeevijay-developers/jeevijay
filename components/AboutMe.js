const AboutMe = ({
  wrapperClass = "about-wrapper about-1 style-2 about-page section-padding",
  img1 = "assets/img/about/09a.jpg",
  img2 = "assets/img/about/10.png",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xxl-7 col-xl-6 col-lg-12 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="about-images-2">
              {/* <img
                className="shape-1"
                src="assets/img/about/shape-1.png"
                alt=""
              /> */}
              <img
                className="shape-2"
                src="assets/img/shape/shape-1.png"
                alt=""
              />
              <div className="image-1">
                <img src={img1} alt="img" />
              </div>
              <div className="image-2">
                <img src={img2} alt="img" />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="about-content mt-xxl-5 mt-xl-0 mt-5 ms-xxl-2">
              <div className="section-title">
                <div className="sub-title">
                  <span>ABOUT JEEVIJAY TECHNOLOGIES</span>
                </div>
                <h2>
                  Who we are.
                </h2>
              </div>
              <p>
                Jeevijay Technologies Private Limited is a dynamic Indian tech company specializing in software development, mobile apps, website solutions, and digital marketing. We deliver scalable IT systems, automation dashboards, and industry specific tools for startups, enterprises, and institutions. Backed by a 35+ expert team, we enable digital growth, smart efficiency, and future-ready innovation across sectors.
              </p>
              <br />
              
              <div>
                <h3>Enthusiastically Recommended By Leaders in All Fields.</h3>
                <p>Having worked with the best in class brands, we create fast-growth, high visibility initiatives in this competitive digital world.</p>
              </div>
                <div>
                <h3>Next-Gen Innovations</h3>
                <p>From smart automation to state-of-the-art app development to strategic SEO, we craft digital solutions that keep you ahead of the game.</p>
              </div>
                <a href="/services" className="theme-btn">
                  What We Do
                </a>
              
              {/* <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Custom website &amp; mobile app development for your business
                  goals
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Streamlining operations with smart automation &amp; ERP
                  solutions
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Friendly, expert guidance every step of the way
                </li>
              </ul> */}
              <div className="feedback">
                <div className="infu">
                  <img src="assets/img/about/06.png" alt="" />
                  <h6>Trusted by 50,000+ clients across India &amp; beyond</h6>
                </div>
                <div className="infu">
                  <div className="icon-box d-flex align-items-center">
                    <div className="icon">
                      <i className="flaticon-cms" />
                    </div>
                    <h6>Local Roots, Global Vision</h6>
                  </div>
                  <p>
                    Our passionate team brings together deep technical expertise
                    and a genuine commitment to your success.
                  </p>
                </div>
              </div>
              <div className="about-infu">
                <a href="/contact" className="theme-btn">
                  Get In Touch
                </a>
                <div className="contact-us">
                  <img src="assets/img/about/03.png" alt="" />
                  <div className="text">
                    <span className="text-white opacity-50">
                      Call us for a friendly chat
                    </span>
                    <h4 className="text-white">+91 9589031040</h4>
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
export default AboutMe;
