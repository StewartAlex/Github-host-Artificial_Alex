import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import logoai from '../../assets/logoai.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logoai} />
          {/* <h1>Artificial-Alex</h1> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          {/* <p><a href="#wgpt3"></a></p> */}
          <p><a href="#possibility">Artificial-Alex</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
          <p><a href="#blog">Explore It</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">Artificial-Alex</a></p>
              <p><a href="#possibility">Company</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
