import "./main.css";
import SelfInfo from "../SelfInfo/SelfInfo";
import FunFact from "../FunFact/FunFact";

function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <SelfInfo />
        <FunFact />
      </div>
    </main>
  );
}

export default Main;
