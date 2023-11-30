import React from "react";
import "./Navbar.scss";
import svg from "../../assets/dinobroLogo.svg";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={svg} alt="" />
      </div>
      <div className="emoticons">
        <div className="active">&#x1F61B;</div>
        <div>&#x1F60D;</div>
        <div>&#x1F60E;</div>
        <div>&#x1F631;</div>
      </div>
      <ul>
        <li>
          <MailIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
