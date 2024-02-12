import "./main.css";
import SelfInfo from "../SelfInfo/SelfInfo";
import FunFact from "../FunFact/FunFact";
import Project from "../Project/Project";

function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <SelfInfo />
        <FunFact />
        <Project />
      </div>
    </main>
  );
}

export default Main;
