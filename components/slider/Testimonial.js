"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

const testimonials = [
	{
		img: "/OurClients/003.png",
		name: "Priya Sharma",
		role: "CEO, TechVision Solutions",
		text: "Jeevijay IT transformed our entire business operations with their custom ERP solution. The team was professional, delivered on time, and provided excellent post-deployment support.",
	},
	{
		img: "/OurClients/001.png",
		name: "Rajesh Kumar",
		role: "Founder, InnovateNow",
		text: "Working with Jeevijay IT was a game-changer for our startup. Their mobile app development expertise helped us launch our product ahead of schedule with exceptional quality.",
	},
	{
		img: "/OurClients/002.png",
		name: "Anita Patel",
		role: "CTO, FinanceFlow Ltd",
		text: "The cloud migration services from Jeevijay IT saved us 40% on infrastructure costs. Their team handled everything seamlessly with minimal downtime. Highly recommend their services!",
	},
	{
		img: "/OurClients/003.png",
		name: "Suresh Verma",
		role: "Product Manager, HealthPlus",
		text: "Their web development team delivered a robust and scalable platform for our healthcare startup. The UI/UX is fantastic and our users love it!",
	},
	{
		img: "/OurClients/001.png",
		name: "Meena Joshi",
		role: "COO, EduSmart",
		text: "Jeevijay IT's e-learning solutions helped us reach thousands of students online. The support and training provided were top-notch.",
	},
];

const Testimonial = () => {
	const swiperRef = useRef(null);
	return (
		<>
			<div className="section-title text-center testimonial-section-title">
				<div className="sub-title">
					<span>OUR TESTIMONIAL</span>
				</div>
				<h2 className="split-text left">What our clients say about us</h2>
				<p style={{ marginBottom: "2.5rem" }}>
					Accelerate innovation with world-class tech teams We’ll match
					<br /> you to an entire remote team of incredible
				</p>
			</div>

			<Swiper
				{...sliderProps.testimonial}
				className="testimonial-slide"
				autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
				loop={true}
				speed={4000}
				freeMode={true}
				freeModeMomentum={false}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
					// Attach navigation to DOM elements after Swiper is initialized
					setTimeout(() => {
						if (swiper && swiper.params && swiper.params.navigation) {
							swiper.params.navigation.prevEl = document.querySelector('.array-prev');
							swiper.params.navigation.nextEl = document.querySelector('.array-next');
							swiper.navigation.destroy();
							swiper.navigation.init();
							swiper.navigation.update();
						}
					}, 0);
				}}
				navigation={{ prevEl: '.array-prev', nextEl: '.array-next' }}
			>
				{testimonials.map((item, idx) => (
					<SwiperSlide key={idx}>
						<div className="testimonial-card" style={{ paddingBottom: "2rem" }}>
							<img
								src={item.img}
								alt={item.name}
								className="testimonial-img"
							/>
							<div className="testimonial-content">
								<div className="testimonial-stars">
									{[...Array(5)].map((_, i) => (
										<i className="fas fa-star" key={i} />
									))}
								</div>
								<p className="testimonial-text">{item.text}</p>
								<div className="testimonial-info">
									<h5>{item.name}</h5>
									<span>{item.role}</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
				<div className="array-button">
					<button className="array-prev">
						<i className="fas fa-long-arrow-left" />
					</button>
					<button className="array-next">
						<i className="fas fa-long-arrow-right" />
					</button>
				</div>
			</Swiper>
		</>
	);
};

export default Testimonial;

export const Testimonial2 = () => {
	return (
		<Swiper
			{...sliderProps.testimonial2}
			className="swiper testimonial-slide-2"
		>
			{[1,2,3].map((_, idx) => (
				<SwiperSlide key={idx}>
					<div
						className="single-testimonial-item wow fadeInUp"
						data-wow-delay={idx === 0 ? "200ms" : idx === 1 ? "400ms" : "600ms"}
					>
						<div className="client-img">
							<img src={`assets/img/testimonial/0${(idx%2)+1}.png`} alt="client-img" />
						</div>
						<ul className="client-rating">
							{[...Array(5)].map((_, i) => (
								<li key={i}><i className="fas fa-star" /></li>
							))}
						</ul>
						<p className="text">
							{idx === 0 && (
								<>
									Their cybersecurity solutions gave us peace of mind. After implementing<br /> their advanced security framework, we haven't had a single breach.<br /> The team was knowledgeable and responsive throughout the project.
								</>
							)}
							{idx === 1 && (
								<>
									Jeevijay IT's AI integration transformed our customer service.<br />The chatbot they developed handles 80% of our queries automatically,<br />improving response time and customer satisfaction significantly.
								</>
							)}
							{idx === 2 && (
								<>
									Outstanding web development services! They built our e-commerce<br />platform from scratch and it's been running flawlessly for 2 years.<br />The performance optimization they did increased our sales by 35%.
								</>
							)}
						</p>
						<div className="client-info">
							<div className="content">
								<h6>{idx === 0 ? "Arjun Mehta" : idx === 1 ? "Kavita Singh" : "Sanjay Gupta"}</h6>
								<p>{idx === 0 ? "IT Director, SecureBank" : idx === 1 ? "Operations Manager, RetailPro" : "CEO, ShopEasy"}</p>
							</div>
							<div className="quote-icon">
								<img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
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
			{[1,2,3].map((_, idx) => (
				<SwiperSlide key={idx}>
					<div
						className="single-testimonial-item wow fadeInUp"
						data-wow-delay="200ms"
					>
						<ul className="client-rating d-flex align-items-center">
							{[...Array(5)].map((_, i) => (
								<li key={i}><i className="fas fa-star" /></li>
							))}
						</ul>
						<p className="text">
							{idx === 0 && (
								<>
									The digital transformation project they executed for us was flawless.<br />
									From legacy system migration to implementing modern APIs, everything<br />
									was delivered on time and within budget. Truly professional team!
								</>
							)}
							{idx === 1 && (
								<>
									Their blockchain development expertise helped us build a transparent<br />
									supply chain solution. The implementation was smooth and the ongoing<br />
									support has been excellent. Great value for money!
								</>
							)}
							{idx === 2 && (
								<>
									Working with Jeevijay IT on our IoT project was fantastic. They<br />
									developed a smart monitoring system that improved our operational<br />
									efficiency by 45%. The dashboard they created is intuitive and powerful.
								</>
							)}
						</p>
						<div className="client-info">
							<div className="client-img">
								<img src="assets/img/testimonial/02.png" alt="client-img" />
								<div className="icon">
									<i className="flaticon-quote" />
								</div>
							</div>
							<div className="content">
								<h6>{idx === 0 ? "Deepak Sharma" : idx === 1 ? "Neha Agarwal" : "Vikram Joshi"}</h6>
								<p>{idx === 0 ? "Technology Head, ManufacturingPlus" : idx === 1 ? "VP Technology, LogisticsCorp" : "Plant Manager, GreenEnergy Solutions"}</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
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
			{[1,2,3,4,5,6,7,8,9].map((_, idx) => (
				<SwiperSlide key={idx}>
					<div
						className="single-testimonial-item wow fadeInUp"
						data-wow-delay="200ms"
					>
						<img className="shape-1" src="assets/img/shape/shape-11.png" alt />
						<div className="client-img center">
							<img src={`assets/img/testimonial/0${(idx%6)+1}.png`} alt="client-img" />
							<div className="icon">
								<i className="flaticon-quote" />
							</div>
						</div>
						<ul className="client-rating d-flex align-items-center justify-content-center">
							{[...Array(5)].map((_, i) => (
								<li key={i}><i className="fas fa-star" /></li>
							))}
						</ul>
						<h3>
							{idx === 0 && "Exceptional Software Development Partners"}
							{idx === 1 && "Best Data Analytics Implementation"}
							{idx === 2 && "Reliable IT Infrastructure Partners"}
							{idx === 3 && "Outstanding Mobile App Development"}
							{idx === 4 && "Excellent DevOps Implementation"}
							{idx === 5 && "Professional Cloud Migration Services"}
							{idx === 6 && "Top-notch Technical Consulting"}
							{idx === 7 && "Amazing API Development Services"}
							{idx >= 8 && "Exceptional Software Development Partners"}
						</h3>
						<p className="text">
							{idx === 0 && "Jeevijay IT delivered a comprehensive CRM solution that streamlined our sales process and improved customer relationships. Their attention to detail and technical expertise is unmatched."}
							{idx === 1 && "The business intelligence dashboard they created gives us real-time insights into our operations. Decision-making has become much more data-driven and efficient since the implementation."}
							{idx === 2 && "Their managed IT services have kept our systems running smoothly for over 3 years. The proactive monitoring and quick resolution of issues has significantly reduced our downtime."}
							{idx === 3 && "They developed our cross-platform mobile app that now has over 100K downloads. The app is fast, user-friendly, and has helped us reach a much wider customer base."}
							{idx === 4 && "The DevOps practices they implemented reduced our deployment time from hours to minutes. Their CI/CD pipeline setup has made our development process much more efficient and reliable."}
							{idx === 5 && "Moving to the cloud seemed daunting, but Jeevijay IT made it seamless. Their planning and execution were flawless, and we've seen significant cost savings and improved scalability."}
							{idx === 6 && "Their technical consulting helped us choose the right technology stack for our startup. The architecture they designed has scaled perfectly as we've grown from 1K to 50K users."}
							{idx === 7 && "The RESTful APIs they built are fast, secure, and well-documented. Integration with third-party services has never been easier. Their code quality and documentation standards are exceptional."}
							{idx >= 8 && "Jeevijay IT delivered a comprehensive CRM solution that streamlined our sales process and improved customer relationships. Their attention to detail and technical expertise is unmatched."}
						</p>
						<div className="client-info">
							<h4>
								{idx === 0 && "Rohit Malhotra"}
								{idx === 1 && "Meera Nair"}
								{idx === 2 && "Amit Khanna"}
								{idx === 3 && "Sunita Rao"}
								{idx === 4 && "Karan Verma"}
								{idx === 5 && "Rashmi Chopra"}
								{idx === 6 && "Anil Kumar"}
								{idx === 7 && "Pooja Iyer"}
								{idx >= 8 && "Rohit Malhotra"}
							</h4>
							<p>
								{idx === 0 && "Sales Director, TechSolutions Inc"}
								{idx === 1 && "Analytics Manager, DataDriven Corp"}
								{idx === 2 && "IT Manager, GlobalTech Solutions"}
								{idx === 3 && "Product Owner, MobileFirst Solutions"}
								{idx === 4 && "DevOps Lead, CodeFlow Technologies"}
								{idx === 5 && "Infrastructure Head, CloudFirst Enterprises"}
								{idx === 6 && "CTO, StartupSuccess"}
								{idx === 7 && "Technical Lead, APIFirst Solutions"}
								{idx >= 8 && "Sales Director, TechSolutions Inc"}
							</p>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
