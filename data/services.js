const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Get a website that’s fast, beautiful, and works perfectly on any device—built just for your business.",
    link: "services-details/web-development",
    icons: "flaticon-web-development",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "We create mobile apps that are easy to use and help you connect with your customers, wherever they are.",
    link: "services-details/app-development",
    icons: "bi bi-phone",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Delight your users with modern, intuitive designs that make every interaction a pleasure.",
    link: "services-details/ui-ux-design",
    icons: "flaticon-user-experience",
  },
  {
    id: 4,
    title: "Business Planning",
    description:
      "Let’s map out your digital journey together, with strategies that help you grow and succeed.",
    link: "services-details/business-planning",
    icons: "flaticon-strategy",
  },
  {
    id: 5,
    title: "Management",
    description:
      "We streamline your processes so you can focus on what matters—growing your business.",
    link: "services-details/management",
    icons: "flaticon-maintenance",
  },
  {
    id: 6,
    title: "Digital marketing",
    description:
      "Reach more people and boost your brand with smart SEO and social media strategies that work.",
    link: "services-details/digital-marketing",
    icons: "flaticon-engineering",
  },
  {
    id: 7,
    title: "Graphic and Brand Development",
    description:
      "Stand out with a memorable logo and visuals that truly reflect your brand’s personality.",
    link: "services-details/graphic-and-brand-development",
    icons: "flaticon-management",
  },
  {
    id: 8,
    title: "IT Consultancy",
    description:
      "Get honest, expert advice to solve your tech challenges and plan for the future with confidence.",
    link: "services-details/it-consultant",
    icons: "flaticon-connection",
  },
];

const serviceDetails = [
  {
    id: "business-planning",
    heading: "Accelerate Innovation with Business Planning",
    subDesc:
      "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "Business Planning",
      para1:
        "Strategic digital planning is vital for success in today’s competitive market. We develop tailored strategies aligned with your goals, helping you identify opportunities, reduce risks, and build a clear roadmap to achieve long-term growth and sustainability in a rapidly changing digital landscape.",
      para2:
        "We study market trends, customer behavior, and technology advancements to create data-driven strategies. From performance tracking to campaign execution, our business plans are designed to increase visibility, enhance operations, and establish your brand’s competitive advantage in the digital ecosystem.",
    },
  },
  {
    id: "web-development",
    heading: "Build Impactful Websites with Web Development",
    subDesc:
      "Deliver high-performance, responsive websites tailored to your goals using the latest web technologies.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "Web Development",
      para1:
        "We design and develop modern, scalable websites that load quickly, function smoothly, and reflect your brand’s identity. Our team uses the latest frameworks and best practices to ensure your website is responsive, secure, and optimized for user experience and SEO performance.",
      para2:
        "Whether you're launching a new site or upgrading an existing one, we offer end-to-end solutions from front-end design to back-end integration. We prioritize user engagement, accessibility, and conversion to make sure your digital presence achieves tangible business results.",
    },
  },
  {
    id: "app-development",
    heading: "Launch Seamless Mobile Apps Across Platforms",
    subDesc:
      "We develop high-quality mobile apps for iOS and Android that deliver excellent performance and experience.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "App Development",
      para1:
        "Our mobile app development services focus on building responsive, reliable, and user-centric apps for Android and iOS platforms. From UI/UX to performance optimization, we create mobile experiences that are intuitive, fast, and aligned with your business vision and goals.",
      para2:
        "We handle everything from concept, wireframes, and design to development and app store deployment. Whether it’s a native or cross-platform app, we ensure quality, scalability, and a smooth user experience that keeps users engaged and coming back.",
    },
  },
  {
    id: "ui-ux-design",
    heading: "Design Beautiful Interfaces with UI/UX Expertise",
    subDesc:
      "We create clean, user-focused designs that offer great usability and aesthetic appeal on all devices.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "UI/UX Design",
      para1:
        "We deliver intuitive and elegant user experiences by blending creativity, functionality, and user behavior insights. Our team focuses on designing interfaces that not only look great but also guide users effortlessly, ensuring they can navigate your platform with confidence and satisfaction.",
      para2:
        "From detailed wireframes to full-scale UI systems, we ensure every design is consistent, accessible, and visually engaging. Our process includes research, testing, and iteration to create experiences that connect with your audience and adapt smoothly across all devices and screen sizes.",
    },
  },
  {
    id: "management",
    heading: "Optimize Operations with Business Management",
    subDesc:
      "Streamline workflows and boost productivity using smart management practices tailored to your organization.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "Management",
      para1:
        "We help organizations enhance efficiency and control through structured management strategies. Our team evaluates your internal processes, identifies bottlenecks, and applies proven techniques to streamline operations, reduce costs, and improve decision-making across departments and teams.",
      para2:
        "From project planning and task automation to team collaboration tools, we implement systems that scale with your growth. Our approach empowers businesses to stay agile, maintain quality, and deliver consistent results, even in rapidly changing environments.",
    },
  },
  {
    id: "digital-marketing",
    heading: "Boost Your Reach with Digital Marketing",
    subDesc:
      "Drive traffic, engagement, and conversions with tailored digital marketing strategies and performance tracking.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "Digital Marketing",
      para1:
        "We create data-driven digital marketing campaigns that increase brand awareness, attract qualified leads, and drive sales. Our strategies span SEO, content marketing, paid ads, and social media, ensuring your brand gets noticed by the right audience at the right time.",
      para2:
        "Through constant optimization, analytics, and creative messaging, we deliver measurable growth and long-term online success. Whether you're starting from scratch or scaling up, we align our efforts with your business goals and budget to maximize return on investment.",
    },
  },
  {
    id: "graphic-and-brand-development",
    heading: "Build a Strong Identity with Branding & Graphics",
    subDesc:
      "Create stunning visuals and a consistent brand identity that connects with your audience across all channels.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "Graphic and Brand Development",
      para1:
        "Our design team brings your brand to life through logos, color schemes, typography, and graphics that resonate with your target audience. We focus on creating visual identities that are both memorable and aligned with your company’s vision and values.",
      para2:
        "From digital assets to print materials, we ensure consistency and creativity in every design. Whether you're rebranding or starting fresh, our graphic solutions help you build credibility, stand out in the market, and leave a lasting impression.",
    },
  },
  {
    id: "it-consultant",
    heading: "Navigate Technology with Expert IT Consulting",
    subDesc:
      "Leverage expert advice to plan, build, and optimize your digital infrastructure and IT strategies.",
    image: "https://placehold.co/600x400",
    description: {
      heading: "IT Consultant",
      para1:
        "Our IT consulting services help you make smart technology decisions that support long-term business success. We assess your current setup, recommend the right tools and platforms, and develop a roadmap for scalable, secure, and future-ready systems.",
      para2:
        "Whether you're adopting cloud solutions, improving cybersecurity, or upgrading legacy infrastructure, we offer guidance backed by deep industry knowledge. Our consultants work closely with your team to ensure seamless implementation and maximum return on your tech investments.",
    },
  },
];

export { serviceDetails };

export { services };
