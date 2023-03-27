import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className={"contact-section"}>
      <h3 className={"section-title"}>Contact Me</h3>
      <div className={"section-content"}>
        <p>Send me an email or get in contact with me through social media!</p>
        {/* <Button>Quick Message?</Button> */}
        <div className={"social-links"}>
          <a
            href="https://github.com/jeggli20"
            target="_blank"
            rel="noreferrer"
            className={"rotate-left"}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://facebook.com/jacob.eggli.3/"
            target="_blank"
            rel="noreferrer"
            className={"rotate-right"}
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href="https://linkedin.com/in/jeggli20"
            target="_blank"
            rel="noreferrer"
            className={"rotate-left"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <a href="mailto:jacob@egglis.com">jacob@egglis.com</a>
      </div>
    </section>
  );
};

export default Contact;