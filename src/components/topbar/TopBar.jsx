import "./topbar.css"
import { Link } from "react-router-dom";

import DarkMode from '../darkmode/DarkMode';


export default function TopBar () {

  return (
    <>
    
    <div className="top">

    <header className="bar">

    <div className="topLeft">

    <a href="https://www.github.com/byrongomezjr" className="topIcons">
    <i className="fa-brands fa-github"></i>
    </a>

    <a href="https://www.linkedin.com/in/byrongomezjr" className="topIcons">
    <i className="fa-brands fa-linkedin"></i>
    </a>

    <a href="https://www.twitter.com/byrongomezjr" className="topIcons">
    <i className="fa-brands fa-twitter"></i>
    </a>

    <a href="https://www.instagram.com/byrongomezjr" className="topIcons">
    <i className="fa-brands fa-instagram"></i>
    </a>

    </div>

    <div className="topCenter">

    <li className="topListItem">
    <Link className="button" to="/">
    HOME
    </Link>
    </li>

    <a>|</a>

    <li className="topListItem">
    <Link className="button" to="/coding">
    PROJECTS
    </Link>
    </li>

    </div>

    <div className="topRight">

    <i className="darkModeIcon fa-solid fa-lightbulb"></i>
    <DarkMode />
    </div>

    </header>

    </div>
    </>
  );
};