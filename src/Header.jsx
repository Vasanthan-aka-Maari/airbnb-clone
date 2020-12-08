import React from "react";
import "./Header.css";
import { SearchOutlined } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img
        src="https://i.pinimg.com/originals/1b/20/58/1b20588ad588cf694ce7af9197f3722d.jpg"
        alt=""
        className="header-icon"
      />

      <div className="header-center">
        <input type="text" />
        <SearchOutlined />
      </div>

      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
