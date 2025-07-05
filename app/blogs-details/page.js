import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";

const blogdata = {
  LatestBlogs: [
    {
      id: 1,
      image: "assets/img/blog/pp1.jpg",
      date: "29 August, 2025",
      title: "Smart About Packaging, Product Design",
      link: "/blog-details",
    },
    {
      id: 2,
      image: "assets/img/blog/pp3.jpg",
      date: "29 August, 2025",
      title: "Tips to Lowering Freight Shipping Costs",
      link: "/blog-details",
    },
  ],
  BlogDetails: {
    pageName: "Blog Details",
    date: "4th February 2025",
    category: "Technology",
    mainImage: "assets/img/blog/details-1.jpg",
    title: "The whimsically named Egg Canvas brainchild",
    paragraphs: [
      `The whimsically named Egg Canvas is the brainchild of Erica Choi, a design director and photographer based in York. Why the name “Egg Canvas”? Erica was inspired by her Korean childhood nickname, which means egg, while “canvas” is the medium with which art is created. “Egg Canvas” therefore is her life—creating beautiful things each day on a blank canvas.`,
      `We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo faucibus, consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum.`,
    ],
    subheading: "Let our investment management team",
    bulletList: [
      "Lorem Ipsum generators on the tend to repeat.",
      "If you are going to use a passage.",
      "Lorem Ipsum generators on the tend to repeat.",
      "Lorem Ipsum generators on the tend to repeat.",
      "If you are going to use a passage.",
    ],
    images: [
      "assets/img/blog/details-2.jpg",
      "assets/img/blog/details-3.jpg",
      "assets/img/blog/details-4.jpg",
    ],
    conclusion: `We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc.`,
  },
};

const page = () => {
  const details = blogdata.BlogDetails;

  return (
    <ZotechLayout>
      <Pagebanner pageName={details.pageName} />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              {/* Left Content */}
              <div className="col-12 col-xxl-8 col-xl-12">
                <div className="blog-post-details border-wrap mt-0">
                  <div
                    className="blog-details-image wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <img src={details.mainImage} alt="blog details" />
                  </div>
                  <div
                    className="single-blog-post post-details mt-0 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="post-content pt-0">
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-calendar-alt" /> {details.date}
                        </span>
                        | <span>{details.category}</span>
                      </div>
                      <h3 className="mt-0">{details.title}</h3>
                      {details.paragraphs.map((para, idx) => (
                        <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                          {para}
                        </p>
                      ))}

                      <h2 className="mt-4">{details.subheading}</h2>
                      <div className="row">
                        <div className="col-xl-7 col-lg-6 col-12">
                          <ul className="checked-list">
                            {details.bulletList.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                          <div className="image-2 mt-3">
                            <img src={details.images[0]} alt="blog" />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5 g-4">
                        {details.images.slice(1).map((img, idx) => (
                          <div className="col-lg-6 col-12" key={idx}>
                            <div className="image-3">
                              <img src={img} alt="blog" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-4">{details.conclusion}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
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
                      {blogdata.LatestBlogs.map((blog) => (
                        <div className="single-post-item" key={blog.id}>
                          <div
                            className="thumb bg-cover"
                            style={{
                              backgroundImage: `url(${blog.image})`,
                            }}
                          />
                          <div className="post-content">
                            <div className="post-date">
                              <i className="fal fa-calendar" /> {blog.date}
                            </div>
                            <h5>
                              <Link href={blog.link}>{blog.title}</Link>
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* end sidebar */}
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};

export default page;
