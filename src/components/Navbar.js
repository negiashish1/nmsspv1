import "./navbar.css";
import { useState } from "react";
import {NavLink as ReactLink} from "react-router-dom";
import { NavItem, NavLink } from "reactstrap";

function Navbar() {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        Narayani Mahila Shakti Sangathan
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {activeNav === '#services' ? 'active' : ''}" onClick={() => setActiveNav('#services')} aria-current="page" href="#services">Services </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {activeNav === '#about' ? 'active' : ''}" onClick={() => setActiveNav('#about')} aria-current="page" href="#about">About </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {activeNav === '#getintouch' ? 'active' : ''}" onClick={() => setActiveNav('#getintouch')} aria-current="page" href="#getintouch">Contact Us </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {activeNav === '#admin' ? 'active' : ''}" onClick={() => setActiveNav('#admin')} aria-current="page" href="#services">Admin </a>
                            </li>
                            <NavItem>
                                <NavLink href="/login">
                                    Admin1
                                </NavLink>
                            </NavItem>
                        </ul>
                    {/* </div> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;