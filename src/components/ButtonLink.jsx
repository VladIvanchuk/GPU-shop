import { Link } from "react-router-dom";

export const ButtonLink = ({ link, text }) => {
  return (
    <div className="cta">
      <Link to={link}>
        <span>{text}</span>
      </Link>
    </div>
  );
};
