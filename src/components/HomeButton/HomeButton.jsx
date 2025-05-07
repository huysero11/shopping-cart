import { FaHome } from "react-icons/fa";
import "./HomeButton.css";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <button className="home-button">
        <FaHome />
      </button>
    </Link>
  );
};

export default HomeButton;
