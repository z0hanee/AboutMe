import React from "react";
const Header = ({ logo, navLinks }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__nav-logo">
            <a href={logo.url} className="logo">
              {logo.name}
            </a>
          </div>
          <div className="header__nav-links">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id} className="header__nav-links-wrap">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
