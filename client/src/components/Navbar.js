import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">GoogleBookSearch</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <Link to="/" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>Search</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;