import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ayushkumar@gmail.com" data-cursor="disable">
                ayushabindkumar@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor of Engineering</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ayusharnindkumar/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ayusharbindkumar/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/aayusharyann"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/aayusharyann/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@aayusharyann/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Youtube <MdArrowOutward />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=918709711907&text=Hello!%20Ayush."
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Whatsapp <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ayush Kumar</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
