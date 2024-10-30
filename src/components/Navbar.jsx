import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../scss/Navbar.scss';

function Navbar({ navbar }) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  return (
    <header className="navbar">
        <Link to='/'> <img src={navbar.logo} alt="logo" className="navbar__logo" />       
        </Link>
      <div className="navbar__hamburger">
        {nav ? (
          <AiOutlineClose size={30} onClick={closeNav} />
        ) : (
          <AiOutlineMenu size={30} onClick={handleNav} />
        )}
      </div>
      <nav className={`${nav ? 'hamburger' : 'hidden'}`}>
        <ul className="navbar__list">
          <li>{navbar.menu.menu_item_1}</li>
          <li><Link to={`/story`} onClick={closeNav}>{navbar.menu.menu_item_2}</Link></li>
          <li>{navbar.menu.menu_item_3}</li>
        </ul>
      </nav>
      <div className={`navbar__blur ${nav ? 'visible' : ''}`} onClick={closeNav}></div>
    </header>
  );
}
Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.string,
    menu: PropTypes.shape({
      menu_item_1: PropTypes.string,
      menu_item_2: PropTypes.string,
      menu_item_3: PropTypes.string,
    }),
  }),
};
export default Navbar;
