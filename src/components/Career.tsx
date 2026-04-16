import "./styles/Career.css";

const careerEntries = [
  {
    title: "Actor & Model",
    company: "Film Industry",
    year: "2019",
    description:
      'Started my journey as an actor and model. Worked in multiple projects including the movie "Coat" (2023), Marathi films, and video songs. Also assisting and managing production work at Shiv Aryan Production Pvt Ltd.',
  },
  {
    title: "Full Stack Developer (7+ Websites)",
    company: "Freelance & Projects",
    year: "2020 - Present",
    description:
      "Working as a Full Stack Developer since 2020. Built 7+ professional websites and web applications including Ultimate Hardcore Fitness, Radhe Automobiles, Adv. Gaurav Kumar, V3, Rescurer EdSkill, Mahadev Laptop, and more. Specialized in React.js, Node.js, MongoDB, and modern UI/UX design.",
  },
  {
    title: "App Developer",
    company: "Melo Bliss (Play Store)",
    year: "2023",
    description:
      'Developed and launched "Melo Bliss" application available on the Play Store. Focused on performance, UI/UX, and scalable backend integration for real-world users.',
  },
  {
    title: "Co-Founder",
    company: "Tech Mall Consultancy Services",
    year: "2024",
    description:
      "Co-founded Tech Mall Consultancy Services, providing digital marketing, IT solutions, legal services, and business consultancy. Managing client projects, strategy, and scaling operations.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerEntries.map((entry) => (
            <div className="career-info-box" key={`${entry.year}-${entry.title}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{entry.title}</h4>
                  <h5>{entry.company}</h5>
                </div>
                <h3>{entry.year}</h3>
              </div>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
