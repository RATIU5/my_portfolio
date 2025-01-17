import profile from "../../img/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className={"about-section"}>
      <div className="profile-title">
        <div className={"profile-border"}>
          <img className={"profile"} src={profile} alt="Me!" />
        </div>
        <div className={"about-title"}>
          <h1>Jacob Eggli</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
      <div className="about-text">
        <p>
          Hey everyone! My name is Jacob Eggli and I love developing
          applications that live on the internet and on your phone. My interest
          in web development started back when, as an intern of a small company,
          I was assigned to reconstruct their intranet. That was the moment that
          I found out I love to code. The web became a new canvas for me to
          express myself!
        </p>
        <p>
          Now I am recently graduated from a technical college where I have
          received formal education in web development. I've worked on many
          projects and worked with&nbsp;
          <a
            href="https://perrymorrisinsurance.com"
            target="_blank"
            rel="noreferrer"
          >
            some clients along the way
          </a>
          . My interest in web development has only grown stronger and I embrace
          all the new challenges that come my way.
        </p>
      </div>
    </section>
  );
};

export default About;
