import "./self-info.css";

function SelfInfo() {
  return (
    <section className="content__self-info">
      <div className="self-info__frame">
        <span className="self-info__tape"></span>

        <img
          src="https://media.licdn.com/dms/image/C5103AQGoJeq7zC6jIg/profile-displayphoto-shrink_800_800/0/1560331657736?e=1710979200&v=beta&t=b7tyhC_B0BWkqeaNd7vyb3NV4hNcAmPbYZPdZVWKCpY"
          className="self-info__img"
          alt="creator icon"
        />
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
          className="self-info__bootcamp-link"
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
          something amazing together! Feel free to explore my portfolio to see
          some of my projects and accomplishments.
        </span>
      </p>
    </section>
  );
}

export default SelfInfo;
