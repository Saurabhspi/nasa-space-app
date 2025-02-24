import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <h1 className="navbar__title">NASA Explorer</h1>
      <ul className="navbar__list">
        <li><NavLink to="/" className="navbar__link" activeClassName="navbar__link--active" exact>Home</NavLink></li>
        <li><NavLink to="/apod" className="navbar__link" activeClassName="navbar__link--active">APOD</NavLink></li>
        <li><NavLink to="/mars" className="navbar__link" activeClassName="navbar__link--active">Mars Rover</NavLink></li>
        <li><NavLink to="/neo" className="navbar__link" activeClassName="navbar__link--active">NEO</NavLink></li>
        <li><NavLink to="/about" className="navbar__link" activeClassName="navbar__link--active">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
