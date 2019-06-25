import React from 'react';

import logo from "../styles/images/wise-watch-logo.png";
import home from "../styles/images/home.png";
import settings from "../styles/images/settings.svg";
import logout from "../styles/images/logout.png";

function Header (){

        return (
            <React.Fragment>

                <header className="header">
                    <div className="logo">
                        <img src={logo} className="logo_image" alt="logo"/>
                    </div>


                    <nav>
                        <img src={home} className="home_image" alt="home"/>
                        <div className="nav_div">
                            <div className="nav_buttons_container">
                                <img src = {settings} className="settings_image" alt="settings"/>
                                <select className="nav_buttons" >
                                    <option selected disabled> Tools </option>
                                </select>

                                <select className="nav_buttons" >
                                    <option selected disabled> stzov </option>
                                </select>

                                <img src = {logout} className="logout_image" alt="logout"/>
                                <button type="button" className="nav_buttons"> Logout </button>
                            </div>
                        </div>

                        <div className="nav_dropdown">
                            <select >
                                <option selected disabled> Menu </option>
                                <option> Tools </option>
                                <option> stzov </option>
                                <option> Logout </option>
                            </select>
                        </div>
                    </nav>
                </header>

            </React.Fragment>

            );
}

export default Header;