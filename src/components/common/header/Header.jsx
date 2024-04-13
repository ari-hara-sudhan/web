import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            {/* <img src='./images/logo.png' alt='' /> */}
            <p className="head">psr-cse</p>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div >
            <h4>
             My List</h4>
            {/* </h4>
            <button className='btn1'>
              <FontAwesomeIcon icon={faSignOut} /> Sign In
            </button> */}
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
