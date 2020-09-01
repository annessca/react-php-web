import React from 'react';
import { Link } from 'react-router-dom';
import avatarTwo from '../images/avatar_g2.jpg'


function SideMenu() {
  return (
    <div>
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar"><br />
            <div className="w3-container">
                <a href="##" onclick="w3_close()" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                    <i className="fa fa-remove"></i>
                </a>
                <img src={avatarTwo} id="sidemenu-avatar" className="w3-round" alt="sidemenu-avatar" />
                <br/><br/>
                <h4><b>PORTFOLIO</b></h4>
                <br />
                <p className="w3-text-grey">Kalu Ikechukwu E.A.</p>
            </div>
            <div className="w3-bar-block">
                <Link to="/home" onclick="changeHomeColor()" className="w3-bar-item w3-button w3-padding" id="home-color"><i className="fa fa-user fa-fw w3-margin-right"></i>HOME</Link> 
                <Link to="/portfolio" onclick="changePortfolioColor()" className="w3-bar-item w3-button w3-padding" id="portfolio-color"><i className="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO</Link> 
                <Link to="/contact" onclick="changeContactColor()" className="w3-bar-item w3-button w3-padding" id="contact-color"><i className="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</Link>
                <a href="#logout" onclick="w3_close()" className="w3-bar-item w3-button w3-padding"><i className="fa fa-power-off fa-fw w3-margin-right"></i>LOGOUT</a>
            </div>
            <div className="w3-panel w3-large">
                <i className="fa fa-facebook-official w3-hover-opacity">&nbsp;</i>
                <i className="fa fa-instagram w3-hover-opacity">&nbsp;</i>
                <i className="fa fa-snapchat w3-hover-opacity">&nbsp;</i>
                <i className="fa fa-pinterest-p w3-hover-opacity">&nbsp;</i>
                <i className="fa fa-twitter w3-hover-opacity">&nbsp;</i>
                <i className="fa fa-linkedin w3-hover-opacity"></i>
            </div>
        </nav>

        <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor: "pointer"}} title="close side menu" id="myOverlay"></div>
    </div>
  );
}

export default SideMenu;