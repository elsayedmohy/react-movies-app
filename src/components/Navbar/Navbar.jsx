import React from "react";
import logo from "../../assets/logo.png"
import  "./navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="headerContainer">
       <div style={{display:"flex" , alignItems:"center"}}> <img className="logoImage" src={logo} />
        <p className="logoText">IRVIN</p></div>
        <form className="searchForm">
          <input
            className="searchInput"
            type="text"
            placeholder="search for movie"
          />
          <button className="mainButton">search</button>
        </form>
      </div>
    </header>
  );
}
