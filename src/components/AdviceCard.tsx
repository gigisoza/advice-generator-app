import dividierDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";

export const AdviceCard = () => {
  return (
    <div className="card">
      <p>advice #1</p>
      <h2>This is an advice</h2>
      <img src={dividierDesktop} className="divider-desktop" alt="divider" />
      <img src={dividerMobile} className="divider-mobile" alt="divider" />

      <div className="dice">
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};
