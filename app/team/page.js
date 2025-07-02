import Pagebanner from "@/components/Pagebanner";
import { Team } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  const teamMembers = [
    {
      role: "Founder & CEO",
      name: "Vikas Patel",
      image: "assets/img/team/05.jpg",
      delay: "200ms",
    },
    {
      role: "Full Stack Developer",
      name: "Vishal Bala",
      image: "assets/img/team/07.jpg",
      delay: "600ms",
    },
    {
      role: "Full Stack Developer",
      name: "Lakshay Saxena",
      image: "assets/img/team/06.jpg",
      delay: "400ms",
    },
    {
      role: "Marketing Manager",
      name: "Tushar Dua",
      image: "assets/img/team/05.jpg",
      delay: "200ms",
    },
    {
      role: "Flutter Developer",
      name: "Parv Vijayvargiya",
      image: "assets/img/team/08.jpg",
      delay: "800ms",
    },
    {
      role: "Full Stack Developer",
      name: "Rajat Pandey",
      image: "assets/img/team/02.jpg",
      delay: "200ms",
    },
    {
      role: "Full Stack Developer",
      name: "Abhishek Yadav",
      image: "assets/img/team/01.jpg",
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
