import "./main.css";
import FunFact from "../FunFact/FunFact";
import Project from "../Project/Project";

function Main() {
  return (
    <main className="content">
      <p className="content__self-info">
        Hello! I'm a junior web developer with a background in vulnerability
        management analysis. My passion for cybersecurity led me to pursue a
        career in IT communication. To expand my skills and gain a deeper
        understanding, I enrolled in
        <a
          href="https://tripleten.com/software-engineer/?form_position=%2Fqa-engineer%2F&gaid=2057165500.1686775753&referrer=N%2FA"
          className="content__bootcamp-link"
        >
          Triple Ten's Software Engineering Bootcamp
        </a>
        , where I discovered my fascination with software engineering. Creating
        new and exciting experiences for people through software development has
        become my passion. While I continue to nurture my interest in
        cybersecurity and work towards obtaining CompTIA CYSA+, I'm excited to
        explore the world of web development as my second career. My goal is to
        make people's online experiences more secure, enjoyable, and convenient.
        Let's build something amazing together!
      </p>
      <p className="content__self-info">
        Feel free to explore my portfolio to see some of my projects and
        accomplishments.
      </p>
      <FunFact />
      <Project />
    </main>
  );
}

export default Main;
