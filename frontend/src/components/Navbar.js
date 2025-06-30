import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Just import CSS here, don't paste it in this file

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <h1 className="navbar__title">NASA Explorer</h1>

      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apod"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            APOD
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mars"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            Mars Rover
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/neo"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            NEO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar__link navbar__link--active" : "navbar__link"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
