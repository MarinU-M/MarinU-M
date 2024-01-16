import "./main.css";
import FunFact from "../FunFact/FunFact";
import Project from "../Project/Project";

function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <section className="content__self-info">
          <div className="content__frame">
            <span className="content__tape"></span>

            <img
              src="https://media.licdn.com/dms/image/C5103AQGoJeq7zC6jIg/profile-displayphoto-shrink_800_800/0/1560331657736?e=1710979200&v=beta&t=b7tyhC_B0BWkqeaNd7vyb3NV4hNcAmPbYZPdZVWKCpY"
              className="content__img"
              alt="creator icon"
            />
          </div>
          <p className="content__text">
            <span>
              Hello! I'm a junior web developer with a background in
              vulnerability management analysis. My passion for cybersecurity
              led me to pursue a career in IT communication. To expand my skills
              and gain a deeper understanding, I enrolled in&nbsp;
            </span>
            <a
              href="https://tripleten.com/software-engineer/?form_position=%2Fqa-engineer%2F&gaid=2057165500.1686775753&referrer=N%2FA"
              className="content__bootcamp-link"
            >
              Triple Ten's Software Engineering Bootcamp
            </a>
            <span>
              , where I discovered my fascination with software engineering.
              Creating new and exciting experiences for people through software
              development has become my another passion. While I continue to
              nurture my interest in cybersecurity, I'm excited to explore the
              world of web development as my second career. My goal is to make
              people's online experiences more secure, enjoyable, and
              convenient. Let's build something amazing together! Feel free to
              explore my portfolio to see some of my projects and
              accomplishments.
            </span>
          </p>
        </section>
        <FunFact />
        <Project />
      </div>
    </main>
  );
}

export default Main;
