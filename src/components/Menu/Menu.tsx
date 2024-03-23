import { useSelector } from 'react-redux';
import Sidebar from '../ui/Sidebar';
import useMenu from './useMenu';
import { RootState } from '../../store';
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import './Menu.css';

const Menu = () => {
  const { closeMenu } = useMenu();
  const { isOpen } = useSelector((state: RootState) => state.menu);

  return (
    <Sidebar isOpen={isOpen} onClose={closeMenu}>
      <div className="menu__container">
        <h1 className="menu__title">Menu</h1>
        <nav>
          <ul>
            <li>
              <a className="menu__link">
                <FaHome />
                Home
              </a>
            </li>
            <li>
              <a className="menu__link">
                <FaList />
                Comic Catalog
              </a>
            </li>
            <li>
              <a className="menu__link">
                <FaRegEnvelope />
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Sidebar>
  );
};

export default Menu;
