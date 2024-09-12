import { useState } from "react";
import "./Navbar.css";

function Menu() {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#pages">Pages</a>
      </p>
      <p>
        <a href="#contact">Contact us</a>
      </p>
      <p>
        <a href="#blog">Blog</a>
      </p>
      <p>
        <a href="#landing">Landing</a>
      </p>
    </>
  );
}

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="restaurant__navbar">
      <div className="restaurant__navbar-logo">
        <h1>Gerícht</h1>
      </div>
      <div className="restaurant__navbar-links">
        <Menu />
      </div>
      <div className="restaurant__navbar-actions">
        <div className="restaurant__navbar-actions__registration">
          <p>Log in / Registration</p>
        </div>
        <div className="line"></div>
        <div className="restaurant__navbar-actions__booking">
          <p>Book Table</p>
        </div>
      </div>
      <div className="restaurant__navbar-menu">
        <div className="restaurant__navbar-menu__icon">
          {toggle ? (
            <i class="fa-solid fa-times" onClick={() => setToggle(false)}></i>
          ) : (
            <i class="fa-solid fa-bars" onClick={() => setToggle(true)}></i>
          )}
        </div>
        {toggle && (
          <div className="restaurant__navbar-menu__options-dropdown">
            <Menu />
            <div className="restaurant__navbar-actions__registration">
              <p>Log in / Registration</p>
            </div>
            <div className="restaurant__navbar-actions__booking">
              <p>Book Table</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
