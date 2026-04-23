import { useCallback, useEffect, useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Melo Bliss",
    category: "Mobile Application (Play Store)",
    tools: "React Native, Node.js",
    image: "/images/melobliss.png",
    link: "https://play.google.com/store/apps/details?id=YOUR_APP_ID",
  },
  {
    title: "Tech Mall Consultancy",
    category: "Business Consultancy Website",
    tools: "React.js, Node.js",
    image: "/images/techmallconsultancy.png",
    link: "https://techmallconsultancy.com/",
  },
  {
    title: "Ultimate Hardcore Fitness",
    category: "Gym Website & Management",
    tools: "React.js, Node.js, MongoDB",
    image: "/images/ultimatehardcorefitness.png",
    link: "https://ultimate-hardcore-fitness-website.vercel.app",
  },
  {
    title: "Radhe Automobiles",
    category: "Garage Website & Booking System",
    tools: "React.js, Node.js",
    image: "/images/radheautomobiles.png",
    link: "https://radheautomobiles.com",
  },
  {
    title: "Adv. Gaurav Kumar",
    category: "Lawyer Portfolio Website",
    tools: "React.js",
    image: "/images/adv.Gaurawkumar.png",
    link: "https://advgaurawkumar.com",
  },
  {
    title: "Rescurer EdSkill",
    category: "Education Platform",
    tools: "React.js, Node.js",
    image: "/images/rescuer_eduskills.png",
    link: "https://rescuer-eduskills.vercel.app",
  },
  {
    title: "Mahadev Laptop",
    category: "E-commerce / Service Website",
    tools: "React.js",
    image: "/images/mahadev_laptops.png",
    link: "#",
  },
  {
    title: "V3",
    category: "Business Website",
    tools: "React.js",
    image: "/images/v3.png",
    link: "https://v3softech.in",
  },
];

const MOBILE_BREAKPOINT = 900;
const hasLiveLink = (link?: string) => Boolean(link && link !== "#");

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        {isMobileView ? (
          <div className="work-mobile-list">
            {projects.map((project, index) => (
              <article className="work-mobile-card" key={project.title}>
                <div className="work-mobile-header">
                  <span className="work-mobile-number">0{index + 1}</span>
                  {hasLiveLink(project.link) && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="work-mobile-link"
                      data-cursor="disable"
                    >
                      Visit <MdArrowOutward />
                    </a>
                  )}
                </div>
                <div className="work-mobile-body">
                  <div className="carousel-details">
                    <h4>{project.title}</h4>
                    <p className="carousel-category">{project.category}</p>
                    <div className="carousel-tools">
                      <span className="tools-label">Tools & Features</span>
                      <p>{project.tools}</p>
                    </div>
                    {hasLiveLink(project.link) && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-visit-link"
                        data-cursor="disable"
                      >
                        View Live Project <MdArrowOutward />
                      </a>
                    )}
                  </div>
                  <div className="carousel-image-wrapper">
                    <WorkImage
                      image={project.image}
                      alt={project.title}
                      link={project.link}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="carousel-wrapper">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdArrowBack />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdArrowForward />
            </button>

            <div className="carousel-track-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {projects.map((project, index) => (
                  <div className="carousel-slide" key={project.title}>
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">
                            {project.category}
                          </p>
                          <div className="carousel-tools">
                            <span className="tools-label">
                              Tools & Features
                            </span>
                            <p>{project.tools}</p>
                          </div>
                          {hasLiveLink(project.link) && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="project-visit-link"
                              data-cursor="disable"
                            >
                              View Live Project <MdArrowOutward />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          link={project.link}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-dots">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
