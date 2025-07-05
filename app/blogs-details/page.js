import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Blog Details" />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-xxl-8 col-xl-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div
                    className="blog-details-image wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <img src="assets/img/blog/details-1.jpg" alt="" />
                  </div>
                  <div
                    className="single-blog-post post-details mt-0 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="post-content pt-0">
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          4th February 2025
                        </span>
                        |<span>Technology</span>
                      </div>
                      <h3 className="mt-0">
                        The whimsically named Egg Canvas brainchild{" "}
                      </h3>
                      <p>
                        he whimsically named Egg Canvas is the brainchild of
                        Erica Choi, a design director and photo Sit amet consect
                        velit integer tincidunt scelerisque volutpat neque
                        fermeny massa lacus. grapher based in York. Why the name
                        “Egg Canvas Erica was inspired by her Korean childhood
                        nickname, which means egg while “canvas” medium with wh
                        art is created. “Egg Canvas therefore, is her
                        life—creating beautiful things each day a blank canvas.
                      </p>
                      <p className="mt-4">
                        We have covered many special events such as fireworks,
                        fairs, parades, races, walks, awards ceremonies, fashion
                        shows, sporting events, and even a memorial service.
                      </p>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vulputate vestibulum rhon cus, dolor eget
                        viverra pretium, dolor tellus aliquet nunc, vitae
                        ultricies erat elit eu lacus. Vestibulum non justo fun
                        consectetur, cursus ante, tincidunt sapien. Nulla quis
                        diam sit amet turpis interd enim. Vivamus fauc ex sed
                        nibh egestas elementum. Mauris et bibendum
                      </p>
                  
                      <h2 className="mt-4">
                        Let our investment management team{" "}
                      </h2>
                      <div className="row">
                        <div className="col-xl-7 col-lg-6 col-12">
                          <ul className="checked-list">
                            <li>
                              Lorem Ipsum generators on the tend to repeat.
                            </li>
                            <li>If you are going to use a passage.</li>
                            <li>
                              Lorem Ipsum generators on the tend to repeat.
                            </li>
                            <li>
                              Lorem Ipsum generators on the tend to repeat.
                            </li>
                            <li> If you are going to use a passage.</li>
                          </ul>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                          <div className="image-2 mt-3">
                            <img src="assets/img/blog/details-2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5 g-4">
                        <div className="col-lg-6 col-12">
                          <div className="image-3">
                            <img src="assets/img/blog/details-3.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="image-3">
                            <img src="assets/img/blog/details-4.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p className="mt-4">
                        We have covered many special events such as fireworks,
                        fairs, parades, races, walks, awards ceremonies, fashion
                        shows, sporting events, and even a memorial
                        service.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. vestibulum rhoncus, dolor eget viverra
                        pretium, dolor ellus aliquet nunc,
                      </p>
                    </div>
                  </div>
              
                </div>
              </div>
              <div className="col-12 col-xxl-4 col-xl-5">
                <div className="main-sidebar">
              
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="wid-title">
                      <h3>Our Latest Blogs</h3>
                    </div>
                    <div className="popular-posts">
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/blog/pp1.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <div className="post-date">
                            <i className="fal fa-calendar" />
                            29 August, 2025
                          </div>
                          <h5>
                            <Link href="/blog-details">
                              Smart About Packaging, Product Design
                            </Link>
                          </h5>
                        </div>
                      </div>
                  
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/blog/pp3.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <div className="post-date">
                            <i className="fal fa-calendar" />
                            29 August, 2025
                          </div>
                          <h5>
                            <Link href="/blog-details">
                              Tips to Lowering Freight Shipping Costs
                            </Link>
                          </h5>
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
    </ZotechLayout>
  );
};
export default page;
