import mainIimg from "../theme/img/main.png";
import { ButtonLink } from ".";

export const Main = () => {
  return (
    <div className="main">
      <div className="text">
        <h1>
          Feel the <span>power</span>
        </h1>
        <h2>
          <span>GPU</span> EXPERIENCE
        </h2>
        <ButtonLink link="/products" text={"Lets shop!"} />
      </div>
      <img src={mainIimg} alt="" />
    </div>
  );
};
