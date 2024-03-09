import { useMenu } from '../Menu';
import { FaBars } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import ChapterNavigator from './chapter-navigator';
import "./Header.css";

import { FaCheck } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

const Header = () => {
  const { openMenu } = useMenu();

  return (
    <header className="header">
      <button className='link-button' onClick={openMenu}>
        <FaBars />
      </button>
      <a className="header__title-name">
        <span>The Amazing Spider-Man (2022-)</span>
      </a>
      <ChapterNavigator />
      <div className="header__action-list">
        {/* <a className="link-button header__action-button">
          <FaCheck />
          Read
        </a>
        <a className="link-button header__action-button">
          <FaBookmark />
          Bookmark
        </a>
        <a className="link-button header__action-button">
          <FaExclamation />
          Feedback
        </a> */}
        <button className="link-button header__action-button">
          <FaCog />
          Settings
        </button>
      </div>
    </header>
  );
};

export default Header;
