import Link from "next/link";

const Pricing = () => {
  return (
    <div className="row g-4 align-items-stretch mt-4">
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
        data-wow-delay="200ms"
      >
        <div className="single-pricing-item h-fit">
          <div className="header">
            <h4>Basic Plan</h4>
            <span>
              Great for startups and small businesses taking their first step
              online. Get all the essentials to build your brand and connect with
              your audience.
            </span>
          </div>
          <div className="price">
            ₹10,000 <span> / Month </span>
          </div>
          <Link href="pricing" className="theme-btn trasparent-btn-2 black-btn">
            <span>Start Free Trial</span>
          </Link>
          <ul className="list">
            <li>
              <i className="fas fa-check-circle" />
              Social Media Management with smart scheduling
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Custom-designed flyer posts every month
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Engaging reels & shorts to grow your audience
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Active audience engagement & community building
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Creative ad design for Facebook & Instagram
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Ad campaign setup & monitoring
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Facebook Business Manager setup
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Regular performance updates
            </li>
          </ul>
          <div className="price-img">
            <img src="assets/img/price-1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
        data-wow-delay="400ms"
      >
        <div className="single-pricing-item h-fit">
          <div
            className="btn btn-success"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              zIndex: 10,
              fontSize: "12px",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            BEST CHOICE
          </div>
          <div className="header">
            <h4>Standard Plan</h4>
            <span>
              Perfect for growing businesses ready to boost their digital presence
              and see real results. More content, more reach, more engagement.
            </span>
          </div>
          <div className="price">
            ₹15,000 <span> / Month </span>
          </div>
          <Link href="pricing" className="theme-btn theme-btn-2 black-btn">
            <span>Start Free Trial</span>
          </Link>
          <ul className="list">
            <li>
              <i className="fas fa-check-circle" />
              Social Media Management with smart scheduling
            </li>
            <li>
              <i className="fas fa-check-circle" />
              20 custom flyer posts per month
            </li>
            <li>
              <i className="fas fa-check-circle" />
              8 engaging reels & shorts every month
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Active audience engagement & community building
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Creative ad design for Facebook & Instagram
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Ad campaign setup & monitoring
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Facebook Business Manager setup
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Custom audience creation
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Youtube Ad Account setup
            </li>
            <li>
              <i className="fas fa-check-circle" />
              A/B testing for better results
            </li>
          </ul>
          <div className="price-img">
            <img src="assets/img/price-2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
        data-wow-delay="600ms"
      >
        <div className="single-pricing-item h-fit">
          <div className="header">
            <h4>Premium Plan</h4>
            <span>
              For ambitious brands who want to lead the market. Unlock advanced
              features, daily content, and powerful ad strategies for maximum
              impact.
            </span>
          </div>
          <div className="price">
            ₹25,000 <span> / Month </span>
          </div>
          <Link href="pricing" className="theme-btn trasparent-btn-2 black-btn">
            <span>Start Free Trial</span>
          </Link>
          <ul className="list">
            <li>
              <i className="fas fa-check-circle" />
              Social Media Management with smart scheduling
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Daily custom flyer posts
            </li>
            <li>
              <i className="fas fa-check-circle" />
              12 reels & shorts every month
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Active audience engagement & community building
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Creative ad design for Facebook & Instagram
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Ad campaign setup & monitoring
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Facebook Business Manager setup
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Custom audience creation
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Youtube Ad Account setup
            </li>
            <li>
              <i className="fas fa-check-circle" />
              A/B testing for best performance
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Youtube Ads (all formats)
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Dynamic & carousel ads
            </li>
          </ul>
          <div className="price-img">
            <img src="assets/img/price-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
