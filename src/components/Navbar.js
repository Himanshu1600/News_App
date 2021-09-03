import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  activeClassName="active_link"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  <span className="nav-link" aria-current="page">
                    Home
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_link"
                  style={{ textDecoration: "none" }}
                  to="/business"
                >
                  <span className="nav-link">Business</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_link"
                  style={{ textDecoration: "none" }}
                  to="/entertainment"
                >
                  <span className="nav-link">Entertainment</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_link"
                  style={{ textDecoration: "none" }}
                  to="/sports"
                >
                  <span className="nav-link">Sports</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_link"
                  style={{ textDecoration: "none" }}
                  to="/health"
                >
                  <span className="nav-link">Health</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_link"
                  style={{ textDecoration: "none" }}
                  to="/science"
                >
                  <span className="nav-link">Science</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active_link"
                  style={{ textDecoration: "none" }}
                  to="/technology"
                >
                  <span className="nav-link">Technology</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
