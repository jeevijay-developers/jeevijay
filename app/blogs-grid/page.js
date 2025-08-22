import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Blog Grid" />
      <section className="blog-wrapper blog-1 blog-page section-padding section-bg">
        <div className="shape">
          <img
            className="shape-1"
            src="assets/img/shape/shape-5-black.png"
            alt=""
          />
          <img className="shape-2" src="assets/img/shape/shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR BLOG</span>
            </div>
            <h2>Our Latest Insights &amp; Blog</h2>
          </div>
          <p className="text-center mt-3">
            Accelerate innovation with world-class tech teams We’ll match <br />
            you to an entire remote team of incredible
          </p>
          <div className="blog-inner">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/b11.jpg" alt="" />
                    <img src="assets/img/blog/b12.jpg" alt="" />
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li>12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="/blogs-details/1">
                        Planning your online business goals with a specialist
                      </Link>
                    </h3>
                    <p>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote team of incredible
                    </p>
                    <Link href="/blogs-details/1" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/b21.jpg" alt="" />
                    <img src="assets/img/blog/b22.jpg" alt="" />
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li>12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="/blogs-details/2">
                        Hospital Automation Systems <br />& Management
                      </Link>
                    </h3>
                    <p>
                      Simplify hospital management with solutions for patient
                      data, billing, appointment systems, and diagnostics—all in
                      one integrated system.
                    </p>
                    <Link href="/blogs-details/2" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/b31.jpg" alt="" />
                    <img src="assets/img/blog/b32.jpg" alt="" />
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li>12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="/blogs-details/3">
                        Solutions for Educational Institution
                      </Link>
                    </h3>
                    <p>
                      From intelligent classrooms to student CRMs and learning
                      platforms we are transforming the infrastructure of
                      Educational institutes for improved learning.
                    </p>
                    <Link href="/blogs-details/3" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/b11.jpg" alt="" />
                    <img src="assets/img/blog/b12.jpg" alt="" />
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li>12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="/blogs-details/4">
                        Planning your online business goals with a specialist
                      </Link>
                    </h3>
                    <p>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote team of incredible
                    </p>
                    <Link href="/blogs-details/4" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/b21.jpg" alt="" />
                    <img src="assets/img/blog/b22.jpg" alt="" />
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li>12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="/blogs-details/5">
                        Holistic Healing: Exploring Health Coaching Techniques
                      </Link>
                    </h3>
                    <p>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote team of incredible
                    </p>
                    <Link href="/blogs-details/5" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/b31.jpg" alt="" />
                    <img src="assets/img/blog/b32.jpg" alt="" />
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li>12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="/blogs-details/6">
                        The Art of Self-Care: Lessons from Health Coaching
                      </Link>
                    </h3>
                    <p>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote team of incredible
                    </p>
                    <Link href="/blogs-details/6" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="page-nav-wrap mt-5 text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <ul>
              <li>
                <a className="page-numbers" href="#">
                  <i className="far fa-angle-right" />
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  01
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  02
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  03
                </a>
              </li>
              <li>
                <a className="page-numbers" href="#">
                  <i className="far fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
