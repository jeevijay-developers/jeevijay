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
