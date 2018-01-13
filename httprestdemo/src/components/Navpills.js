import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navpills = () =>
    <ul className="nav nav-tabs">
        <li className={window.location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
        </li>
        <li className={window.location.pathname === "/rest" ? "active" : ""}>
            <Link to="/rest">REST</Link>
        </li>
        <li className={window.location.pathname === "/http" ? "active" : ""}>
            <Link to="/http">HTTP</Link>
        </li>
        <li className={window.location.pathname === "/soap" ? "active" : ""}>
            <Link to="/soap">SOAP</Link>
        </li>
     
    </ul>;

export default Navpills;
