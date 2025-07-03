"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <Swiper {...sliderProps.testimonial} className="swiper testimonial-slide">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="/OurClients/003.png" alt />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                Jeevijay IT transformed our entire business operations with their 
                custom ERP solution. The team was professional, delivered on time, 
                and provided excellent post-deployment support.
              </p>
              <div className="clints-infu pt-4 pt-xxl-5  text-center text-md-start">
                <h5>Priya Sharma</h5>
                <span>CEO, TechVision Solutions</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="/OurClients/001.png" alt />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                Working with Jeevijay IT was a game-changer for our startup. 
                Their mobile app development expertise helped us launch our 
                product ahead of schedule with exceptional quality.
              </p>
              <div className="clints-infu pt-4 pt-lg-5 text-center text-md-start">
                <h5>Rajesh Kumar</h5>
                <span>Founder, InnovateNow</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="/OurClients/002.png" alt />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                The cloud migration services from Jeevijay IT saved us 40% on 
                infrastructure costs. Their team handled everything seamlessly 
                with minimal downtime. Highly recommend their services!
              </p>
              <div className="clints-infu pt-4 pt-lg-5 text-center text-md-start">
                <h5>Anita Patel</h5>
                <span>CTO, FinanceFlow Ltd</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="array-button">
        <button className="array-prev">
          <i className="fas fa-long-arrow-left" />
        </button>
        <button className="array-next">
          <i className="fas fa-long-arrow-right" />
        </button>
      </div>
    </Swiper>
  );
};
export default Testimonial;

export const Testimonial2 = () => {
  return (
    <Swiper
      {...sliderProps.testimonial2}
      className="swiper testimonial-slide-2"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/02.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Their cybersecurity solutions gave us peace of mind. After implementing 
              their advanced security framework, we haven't had a single breach. 
              The team was knowledgeable and responsive throughout the project.
            </p>
            <div className="client-info">
              <div className="content">
                <h6>Arjun Mehta</h6>
                <p>IT Director, SecureBank</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Jeevijay IT's AI integration transformed our customer service. 
              The chatbot they developed handles 80% of our queries automatically, 
              improving response time and customer satisfaction significantly.
            </p>
            <div className="client-info">
              <div className="content">
                <h6>Kavita Singh</h6>
                <p>Operations Manager, RetailPro</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/02.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Outstanding web development services! They built our e-commerce 
              platform from scratch and it's been running flawlessly for 2 years. 
              The performance optimization they did increased our sales by 35%.
            </p>
            <div className="client-info">
              <div className="content">
                <h6>Sanjay Gupta</h6>
                <p>CEO, ShopEasy</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot color-style-two border-style center pt-5">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const Testimonial3 = () => {
  return (
    <Swiper
      {...sliderProps.testimonial3}
      className="swiper testimonial-slide-3"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              The digital transformation project they executed for us was flawless. 
              From legacy system migration to implementing modern APIs, everything 
              was delivered on time and within budget. Truly professional team!
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>Deepak Sharma</h6>
                <p>Technology Head, ManufacturingPlus</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Their blockchain development expertise helped us build a transparent 
              supply chain solution. The implementation was smooth and the ongoing 
              support has been excellent. Great value for money!
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>Neha Agarwal</h6>
                <p>VP Technology, LogisticsCorp</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Working with Jeevijay IT on our IoT project was fantastic. They 
              developed a smart monitoring system that improved our operational 
              efficiency by 45%. The dashboard they created is intuitive and powerful.
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>Vikram Joshi</h6>
                <p>Plant Manager, GreenEnergy Solutions</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="array-button">
        <button className="array-next">
          <i className="fas fa-long-arrow-right" />
        </button>
        <button className="array-prev">
          <i className="fas fa-long-arrow-left" />
        </button>
      </div>
    </Swiper>
  );
};
export const Testimonial4 = () => {
  return (
    <Swiper {...sliderProps.testimonial4} className="swiper testimonial-4">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/04.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Exceptional Software Development Partners"</h3>
            <p className="text">
              "Jeevijay IT delivered a comprehensive CRM solution that streamlined 
              our sales process and improved customer relationships. Their attention 
              to detail and technical expertise is unmatched."
            </p>
            <div className="client-info">
              <h4>Rohit Malhotra</h4>
              <p>Sales Director, TechSolutions Inc</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/05.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Best Data Analytics Implementation"</h3>
            <p className="text">
              "The business intelligence dashboard they created gives us real-time 
              insights into our operations. Decision-making has become much more 
              data-driven and efficient since the implementation."
            </p>
            <div className="client-info">
              <h4>Meera Nair</h4>
              <p>Analytics Manager, DataDriven Corp</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/06.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>
              "Reliable IT Infrastructure <br /> Partners"
            </h3>
            <p className="text">
              "Their managed IT services have kept our systems running smoothly 
              for over 3 years. The proactive monitoring and quick resolution 
              of issues has significantly reduced our downtime."
            </p>
            <div className="client-info">
              <h4>Amit Khanna</h4>
              <p>IT Manager, GlobalTech Solutions</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Outstanding Mobile App Development"</h3>
            <p className="text">
              "They developed our cross-platform mobile app that now has over 
              100K downloads. The app is fast, user-friendly, and has helped 
              us reach a much wider customer base."
            </p>
            <div className="client-info">
              <h4>Sunita Rao</h4>
              <p>Product Owner, MobileFirst Solutions</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/04.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Excellent DevOps Implementation"</h3>
            <p className="text">
              "The DevOps practices they implemented reduced our deployment time 
              from hours to minutes. Their CI/CD pipeline setup has made our 
              development process much more efficient and reliable."
            </p>
            <div className="client-info">
              <h4>Karan Verma</h4>
              <p>DevOps Lead, CodeFlow Technologies</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/05.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Professional Cloud Migration Services"</h3>
            <p className="text">
              "Moving to the cloud seemed daunting, but Jeevijay IT made it 
              seamless. Their planning and execution were flawless, and we've 
              seen significant cost savings and improved scalability."
            </p>
            <div className="client-info">
              <h4>Rashmi Chopra</h4>
              <p>Infrastructure Head, CloudFirst Enterprises</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/06.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>
              "Top-notch Technical <br /> Consulting"
            </h3>
            <p className="text">
              "Their technical consulting helped us choose the right technology 
              stack for our startup. The architecture they designed has scaled 
              perfectly as we've grown from 1K to 50K users."
            </p>
            <div className="client-info">
              <h4>Anil Kumar</h4>
              <p>CTO, StartupSuccess</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Amazing API Development Services"</h3>
            <p className="text">
              "The RESTful APIs they built are fast, secure, and well-documented. 
              Integration with third-party services has never been easier. Their 
              code quality and documentation standards are exceptional."
            </p>
            <div className="client-info">
              <h4>Pooja Iyer</h4>
              <p>Technical Lead, APIFirst Solutions</p>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
