import { ButtonLink } from ".";
import explImg from "../theme/img/ExploreMore_Image.png";

export const Explore = () => {
  return (
    <div className="explore">
      <div className="text">
        <h2>
          EXPLORE MORE <span>AMAZING</span>
        </h2>
        <h2>
          <i>VGA</i> PRODUCTS
        </h2>
        <p>
          Shop all video cards and search like a pro with advanced comparison and filter
          options.
        </p>
        <ButtonLink link="/products" text={"Shop now!"} />
      </div>
      <div className="img">
        <img src={explImg} alt="" />
      </div>
    </div>
  );
};
