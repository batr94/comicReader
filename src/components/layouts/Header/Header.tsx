import "./Header.css";
import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <button className="header__menu-button">
        <FaBars />
      </button>
      <a className="header__title-name">
        <span>The Amazing Spider-Man (2022-)</span>
      </a>
      <div className="header__chapter-nav">
        <button className="header__chapter-nav-button">
          <FaAngleLeft />
        </button>
        <div className="header__chapter-nav-select">
          <span>Table of Contents</span>
          <span>The Amazing Spider-Man (2022)</span>
        </div>
        <button className="header__chapter-nav-button">
          <FaAngleRight />
        </button>
      </div>
      <div className="header__action-list">
        <button className="header__action-button">
          <FaCheck />
          Read
        </button>
        <button className="header__action-button">
          <FaBookmark />
          Bookmark
        </button>
        <button className="header__action-button">
          <FaExclamation />
          Feedback
        </button>
        <button className="header__action-button">
          <FaCog />
          Settings
        </button>
      </div>
    </header>
  );
};

export default Header;
