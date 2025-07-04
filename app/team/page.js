import Pagebanner from "@/components/Pagebanner";
import { Team } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  const teamMembers = [
    {
      role: "Founder & CEO",
      name: "Vikas Patel",
      image: "/OurTeam/vikas-sir.png",
      delay: "200ms",
    },
    {
      role: "Full Stack Developer",
      name: "Vishal Bala",
      image: "/OurTeam/vishal.jpeg",
      delay: "600ms",
    },
    {
      role: "Full Stack Developer",
      name: "Lakshay Saxena",
      image: "/OurTeam/lakshay.png",
      delay: "400ms",
    },
    {
      role: "Marketing Manager",
      name: "Tushar Dua",
      image: null,
      delay: "200ms",
    },
    {
      role: "Flutter Developer",
      name: "Parv Vijayvargiya",
      image: "/OurTeam/parv.jpg",
      delay: "800ms",
    },
    {
      role: "Full Stack Developer",
      name: "Rajat Pandey",
      image: "/OurTeam/rajat.jpeg",
      delay: "200ms",
    },
    {
      role: "Full Stack Developer",
      name: "Abhishek Yadav",
      image: "/OurTeam/Abhishek.jpg",
      delay: "400ms",
    },
  ];
  return (
    <ZotechLayout>
      <Pagebanner pageName="Our Team" />
      {/* <!-- Team Section Start --> */}
      <section className="team-wrapper team-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR TEAM MEMBER</span>
            </div>
            <h2>Meet with Our Expert</h2>
            <p className="text-center">
              Accelerate innovation with world-class tech teams We’ll match you{" "}
              <br /> to an entire remote team of incredible freelance.
            </p>
          </div>
          <Team teamMembers={teamMembers} />
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
