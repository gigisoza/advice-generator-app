import dividierDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";

export type Advice = {
  id: number;
  advice: string;
};

interface Props {
  advice: Advice | undefined;
  getAdvice: () => Promise<void>;
}

export const AdviceCard = (props: Props) => {
  const { advice, getAdvice } = props;

  return (
    <div className="card">
      <p>advice #{advice?.id}</p>
      <h2>"{advice?.advice}"</h2>
      <img src={dividierDesktop} className="divider-desktop" alt="divider" />
      <img src={dividerMobile} className="divider-mobile" alt="divider" />

      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
};
