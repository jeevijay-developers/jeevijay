const WorkingProcess = ({
  wrapperClass = "process-wrapper process-2 section-padding section-bg",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="split-text right">Our Working Process in 4 Steps</h2>
        </div>
        <div className="row mt-4 align-items-stretch">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="signle-process-item pe-xl-4 h-100">
              <img
                className="shape-1"
                src="assets/img/process/shape-6.png"
                alt=""
              />
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-conversation" />
                </div>
                <div className="icon-2">01</div>
              </div>
              <h4 className="mb-2">Project Discussion</h4>
              <p>
                We start with a friendly chat—listening to your ideas, answering
                your questions, and understanding what matters most to you.
                Together, we’ll set clear goals for your project.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="signle-process-item pe-xl-3 ps-xl-2 h-100">
              <img
                className="shape-2"
                src="assets/img/process/shape-7.png"
                alt=""
              />
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-cms" />
                </div>
                <div className="icon-2">02</div>
              </div>
              <h4 className="mb-2">Testing &amp; Trying</h4>
              <p>
                See your vision come to life! We’ll share early versions, invite
                your feedback, and make sure everything feels just right before
                moving forward.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="signle-process-item ps-xl-3 pe-xl-2 h-100">
              <img
                className="shape-1"
                src="assets/img/process/shape-6.png"
                alt=""
              />
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-maintenance" />
                </div>
                <div className="icon-2">03</div>
              </div>
              <h4 className="mb-2">Execute &amp; Install</h4>
              <p>
                Sit back and relax while our experts build, launch, and set up
                your solution—always keeping you in the loop and handling every
                detail with care.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="signle-process-item ps-xl-4 h-100">
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-positive-review" />
                </div>
                <div className="icon-2">04</div>
              </div>
              <h4 className="mb-2">Review &amp; Fixing</h4>
              <p>
                We walk through everything together, polish the final details,
                and make sure you’re delighted with the results. Your satisfaction
                is our top priority!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;
