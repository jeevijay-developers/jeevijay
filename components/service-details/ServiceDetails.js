"use client";
import React, { useEffect } from "react";

import { serviceDetails } from "@/data/services";
import ZotechLayout from "@/layout/ZotechLayout";
import Pagebanner from "../Pagebanner";
import WorkingProcess from "../WorkingProcess";
import Image from "next/image";

const ServiceDetails = ({ id }) => {
  const [service, setService] = React.useState({});

  useEffect(() => {
    const foundService = serviceDetails.filter((ser) => ser.id === id);

    console.log("Found Service:", foundService);
    if (foundService) {
      setService(foundService[0]);
    }
  }, []);
  console.log("Service Details:", service, id);
  if (!service || Object.keys(service).length === 0) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    <ZotechLayout>
      <Pagebanner pageName={service.description.heading} />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  {service.heading ||
                    "Accelerate Innovation with Business Planning"}
                </h2>
                <p>
                  {service.subDesc ||
                    "Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs."}
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src={service.image} alt="img" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>{service.description.heading || "Description"}</h4>
                  <p className="mt-3">
                    {service.description.para1 ||
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit odio dolorem magni facere voluptatem. Dolorum, enim repellat. Animi asperiores nihil ullam at saepe. Deserunt veritatis maiores nostrum dicta sequi."}
                  </p>
                  <p className="mt-3">
                    {service.description.para2 ||
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit suscipit odio dolorem magni facere voluptatem. Dolorum, enim repellat. Animi asperiores nihil ullam at saepe. Deserunt veritatis maiores nostrum dicta sequi."}
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="/assets/img/service/details-2.jpg"
                            alt="img"
                          />
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
                              Jeevijay is the partner of choice for many of the
                              world’s leading enterprises,
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu ">
                              <Image
                                height={100}
                                width={100}
                                src="/assets/img/about/06.png"
                                alt=""
                              />
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
                                Our great team of more than to <br /> 1400
                                software experts member.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};

export default ServiceDetails;
