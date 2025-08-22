import Pagebanner from "@/components/Pagebanner";
import blogData from "@/data/blog.data";
import ZotechLayout from "@/layout/ZotechLayout";
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;
  const blogdetails = blogData[`${id}`];

  return (
    <div>
      {" "}
      <ZotechLayout>
        <Pagebanner pageName="Blog Details" />
        <div>
          <section className="blog-wrapper section-padding">
            <div className="container">
              <div className="news-area">
                <div
                  className="flex-row d-flex"
                  style={{
                    justifyContent: "center !important",
                    alignItems: "center !important",
                  }}
                >
                  <div className="col-12 col-xxl-8 col-xl-12">
                    <div className="blog-post-details border-wrap mt-0">
                      <div
                        className="blog-details-image wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <img src={blogdetails.mainImage} alt="blog details" />
                      </div>
                      <div
                        className="single-blog-post post-details mt-0 wow fadeInUp"
                        data-wow-delay="200ms"
                      >
                        <div className="post-content pt-0">
                          <div className="post-meta mt-3">
                            <span>
                              <i className="fal fa-calendar-alt" />{" "}
                              {blogdetails.date}
                            </span>
                            | <span>{blogdetails.category}</span>
                          </div>
                          <h3 className="mt-0">{blogdetails.title}</h3>
                          {blogdetails.paragraphs.map((para, idx) => (
                            <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                              {para}
                            </p>
                          ))}

                          <h2 className="mt-4">{blogdetails.subheading}</h2>
                          <div className="row">
                            <div className="col-xl-7 col-lg-6 col-12">
                              <ul className="checked-list">
                                {blogdetails.bulletList.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-12">
                              <div className="image-2 mt-3">
                                <img src={blogdetails.images[0]} alt="blog" />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-5 g-4">
                            {blogdetails.images.slice(1).map((img, idx) => (
                              <div className="col-lg-6 col-12" key={idx}>
                                <div className="image-3">
                                  <img src={img} alt="blog" />
                                </div>
                              </div>
                            ))}
                          </div>
                          <p className="mt-4">{blogdetails.conclusion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ZotechLayout>
    </div>
  );
};

export default Page;
