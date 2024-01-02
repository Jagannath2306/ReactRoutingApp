import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info text-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            App
          </a>
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
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employees">Employee </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/students">Student </Link>
              </li>
            </ul> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employees">Employee </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/students">Student </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">Admin </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
