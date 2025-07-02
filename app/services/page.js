import Pagebanner from "@/components/Pagebanner";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { services } from "@/data/services"; // Importing the services data

const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Our Services" />
      {/* Service Section Start */}
      <section className="service-wrapper service-4 section-bg section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR SERVICES</span>
            </div>
            <h2>
              Preparing for Your Success, We <br /> Provide&nbsp;Truly IT
              Solutions.
            </h2>
          </div>
          <div className="service-inner text-center overflow-hidden mt-4 pt-3">
            <div className="row gy-xxl-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                >
                  <div
                    className="signle-service-item wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div
                      className="service-bg bg-cover"
                      style={{
                        backgroundImage: "url(assets/img/service/08.jpg)",
                      }}
                    />
                    <div className="icon">
                      <i className={`${service.icons}`} />
                    </div>
                    <div className="line mb-4" />
                    <h4>
                      <Link href="services-details">{service.title}</Link>
                    </h4>
                    <p className="pt-3">{service.description}</p>
                    <Link href={service.link} className="infu-btn">
                      Read More
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section Start */}
      <section className="pricing-wrapper pricing-1 style-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>PRICING PLAN</span>
            </div>
            <h2>
              Pricing That Suits <br /> Your Needs
            </h2>
          </div>
          <Pricing />
        </div>
      </section>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
