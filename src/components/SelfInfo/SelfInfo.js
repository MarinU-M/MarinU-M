import "./self-info.css";
import author from "../../images/1560331657736.jpg";
import { Link } from "react-router-dom";

function SelfInfo() {
  return (
    <section className="content__self-info">
      <div className="self-info__frame">
        <span className="self-info__tape"></span>

        <img src={author} className="self-info__img" alt="creator icon" />
      </div>
      <p className="self-info__text">
        <span>
          Hello! I'm a junior web developer with a background in vulnerability
          management analysis. My passion for cybersecurity led me to pursue a
          career in IT communication. To expand my skills and gain a deeper
          understanding, I enrolled in&nbsp;
        </span>
        <a
          href="https://tripleten.com/software-engineer/?form_position=%2Fqa-engineer%2F&gaid=2057165500.1686775753&referrer=N%2FA"
          className="self-info__link"
        >
          Triple Ten's Software Engineering Bootcamp
        </a>
        <span>
          , where I discovered my fascination with software engineering.
          Creating new and exciting experiences for people through software
          development has become my another passion. While I continue to nurture
          my interest in cybersecurity, I'm excited to explore the world of web
          development as my second career. My goal is to make people's online
          experiences more secure, enjoyable, and convenient. Let's build
          something amazing together! Feel free to explore my portfolio to
          see&nbsp;
        </span>
        <Link to="/projects" className="self-info__link">
          all of my projects
        </Link>
        <span>&nbsp;and accomplishments.</span>
      </p>
    </section>
  );
}

export default SelfInfo;
