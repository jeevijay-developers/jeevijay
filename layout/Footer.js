import Link from "next/link";
import { Fragment } from "react";
import { MapPin, Building2, CheckCircle2 } from "lucide-react";

const Footer = ({ footer, cta }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 cta={cta} />;
    default:
      return <Footer4 cta={cta} />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-wrapper ">
      <div className="container">
        <div className="footer-widgets-1 section-padding ">
          <div className="row g-5">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-footer-widget me-xxl-5 pe-xxl-4">
                <div className="widget-head">
                  <Link href="/">
                    <img
                      src="/assets/img/logo/jeevijaylogo.png"
                      alt="logo-img"
                      style={{ maxHeight: "60px", width: "auto" }}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <h4 className="mb-3 text-black">
                    Proudly Serving Four Major Cities Across India
                  </h4>
                  <ul
                    className="list-unstyled text-black small mb-0"
                    style={{ lineHeight: 1.5 }}
                  >
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <MapPin size={38} className="mt-1 text-warning" />
                      <span>
                        Branch Office kota - 22, Second floor Behind Modern
                        Petrol Pump Aerodrome Near Gumanpura Police Station Kota
                        rajasthan (324007)
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <Building2 size={28} className="mt-1 text-warning" />
                      <span>
                        Branch Office - White Field, HN - 1, Sai Colony
                        Extension, Belathur, Kadugodi, Bengaluru, Karnataka
                        560067
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <Building2 size={38} className="mt-1 text-warning" />
                      <span>
                        Shop No. 110, Neelkamal Complex, opposite Manohar Dairy, MP Nagar, Zone-I,
                        Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011
                      </span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <CheckCircle2 size={28} className="mt-1 text-warning" />
                      <span>
                        A - 01 Anmol vatika ground Floor Karmeta road jabalpur
                        Madhya Pradesh (482002)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-footer-widget ms-xxl-2">
                <div className="widget-head">
                  <h4>Useful Links</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="about">
                      <i className="fas fa-circle" />
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-news">
                      <i className="fas fa-circle" />
                      Blog &amp; News
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="projects">
                      <i className="fas fa-circle" />
                      Our Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-footer-widget ms-xxl-4 ps-xxl-3">
                <div className="widget-head">
                  <h4>Our Services</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Web/Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      IT Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Business Planning
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact">
                      <a href="#">
                        <i className="flaticon-email" />
                      </a>
                      <div className="contact-infu">
                        <span>Mail Us:</span>
                        <h5>info@jeevijay.com</h5>
                      </div>
                    </div>
                    {/* <div className="contact">
                      <a href>
                        <i className="fal fa-map-marker-alt" />
                      </a>
                      <div className="contact-infu">
                        <span>Address:</span>
                        <h5 className="text-lowercase">
                          3770 Hidden Meadow Drive Venturia, ND 58489
                        </h5>
                      </div>
                    </div> */}
                    <div className="contact">
                      <a href="#">
                        <i className="fal fa-phone-alt" />
                      </a>
                      <div className="contact-infu">
                        <span>Phone:</span>
                        <h5>+91 9589031040</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-bg-2">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p className="text-center">
              ©Copyright 2025 Jeevijay All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-wrapper">
      <FooterContent logo="/assets/img/logo/jeevijaylogo.png" />
    </footer>
  );
};
const Footer3 = () => {
  return (
    <footer className="footer-wrapper section-padding pb-0">
      <FooterContent layout="style-3 style-2" />
    </footer>
  );
};

const Footer4 = ({ cta }) => {
  return (
    <Fragment>
      {cta && (
        <section className="cta-wrapper cta-2 style-3 section-padding pb-0 section-bg">
          <div className="container">
            <div className="cta-inner wow fadeInUp" data-wow-delay="200ms">
              <div className="icon">
                <i className="flaticon-customer-support" />
              </div>
              <div className="title">
                <h3 className="split-text right">
                  Looking for the Best IT Business Solutions?
                </h3>
                <p>As a app web crawler expert, We will help to organize.</p>
              </div>
              <a href="/contact" className="theme-btn white-btn">
                Take a Consultant
              </a>
            </div>
          </div>
        </section>
      )}
      <footer className="footer-wrapper section-bg-2 section-padding pb-0">
        <div className="marquee-section mt-5 pt-5">
          <div className="mycustom-marque">
            <div className="scrolling-wrap">
              <div className="comm">
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <Fragment key={index}>
                      <div className="cmn-textslide color-2">Let’s Talk</div>
                      <div>
                        <img src="/assets/img/marquee-box.png" alt="img" />
                      </div>
                      <div className="cmn-textslide">Let’s Talk</div>
                      <div>
                        <img src="/assets/img/marquee-box-2.png" alt="img" />
                      </div>
                    </Fragment>
                  ))}
              </div>
              <div className="comm ms-3">
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide ">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="/assets/img/marquee-box.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterContent logo="/assets/img/logo/jvlogo.png" />
      </footer>
    </Fragment>
  );
};

const FooterContent = ({
  logo = "/assets/img/logo/jeevijaylogo.png",
  layout = "style-2",
}) => {
  const services = [
    "Blockchain technology",
    "Advanced Technology",
    "Infrastructure Technology",
    "Data Management",
    "Security Management",
  ];

  const contacts = [
    {
      icon: "flaticon-email",
      title: "Mail Us:",
      info: "info@jeevijay.com",
      href: "mailto:info@jeevijay.com",
    },
    // {
    //   icon: "fal fa-map-marker-alt",
    //   title: "Address:",
    //   info: "3770 Hidden Meadow Drive Venturia, ND 58489",
    //   href: "#",
    // },
    {
      icon: "fal fa-phone-alt",
      title: "Phone:",
      info: "+91 9589031040",
      href: "tel:+91 9589031040",
    },
  ];

  const galleryImgs = [
    { src: "/assets/img/gallery/01.jpg" },
    { src: "/assets/img/gallery/02.jpg" },
    { src: "/assets/img/gallery/03.jpg" },
    { src: "/assets/img/gallery/04.jpg" },
    { src: "/assets/img/gallery/05.jpg" },
    { src: "/assets/img/gallery/06.jpg" },
    { src: "/assets/img/gallery/07.jpg" },
    { src: "/assets/img/gallery/08.jpg" },
    { src: "/assets/img/gallery/09.jpg" },
  ];

  return (
    <Fragment>
      <div className="container">
        <div className={`footer-widgets-1 section-padding ${layout}`}>
          <div className="row g-5">
            <div
              className="col-xl-3 col-lg-6 pe-xxl-0 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img
                      src={logo}
                      alt="logo-img"
                      style={{ maxHeight: "60px", width: "auto" }}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <h4 className="mb-3 text-white">
                    Proudly Serving Four Major Cities Across India
                  </h4>
                  <ul
                    className="list-unstyled text-white small mb-0"
                    style={{ lineHeight: 1.5 }}
                  >
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <MapPin size={38} className="mt-1 text-warning" />
                      <span>
                        Branch Office kota - 22, Second floor Behind Modern
                        Petrol Pump Aerodrome Near Gumanpura Police Station Kota
                        rajasthan (324007)
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <Building2 size={28} className="mt-1 text-warning" />
                      <span>
                        Branch Office - White Field, HN - 1, Sai Colony
                        Extension, Belathur, Kadugodi, Bengaluru, Karnataka
                        560067
                      </span>
                    </li>
                    <li className="mb-2 d-flex align-items-start gap-2">
                      <Building2 size={38} className="mt-1 text-warning" />
                      <span>
                        Shop No. 110, Neelkamal Complex, opposite Manohar Dairy, MP Nagar, Zone-I, 
                        Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011
                      </span>
                    </li>
                    <li className="d-flex align-items-start gap-2">
                      <CheckCircle2 size={28} className="mt-1 text-warning" />
                      <span>
                        A - 01 Anmol vatika ground Floor Karmeta road jabalpur
                        Madhya Pradesh (482002)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-footer-widget ms-xxl-5 ps-xxl-3">
                <div className="widget-head">
                  <h4>Our Services</h4>
                </div>
                <ul className="list-area">
                  {services.map((service) => (
                    <li key={service}>
                      <Link href="/contact">
                        <i className="fas fa-circle" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    {contacts.map((contact, index) => (
                      <div key={index} className="contact">
                        <a href={contact.href}>
                          <i className={contact.icon}></i>
                        </a>
                        <div className="contact-infu">
                          <span>{contact.title}</span>
                          <h5>{contact.info}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="single-footer-widget ms-xxl-5">
                <div className="widget-head">
                  <h4>Gallery</h4>
                </div>
                <div className="gallery">
                  {galleryImgs.map((img, index) => (
                    <div key={index} className="footer-gallery-img">
                      <img src={img.src} alt />
                      <div className="content">
                        <a href={img.src} className="img-popup">
                          <i className="fal fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex flex-column align-items-center justify-content-between">
            <p>Copyright 2025 Jeevijay All Rights Reserved</p>
            <div className="security ">
              <Link href="/contact">Privacy policy</Link>/
              <Link href="/contact">Terms &amp; Condition </Link>/
              <Link href="/about"> About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
