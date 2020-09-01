import React from 'react';
import Footer from './Footer.js';
import SideMenu from './SideMenu';
import mountains from '../images/mountains.jpg'
import lights from '../images/lights.jpg';
import nature from '../images/nature.jpg';
import pictureOne from '../images/p1.jpg';
import pictureTwo from '../images/p2.jpg';
import pictureThree from '../images/p3.jpg';
import avatarTwo from '../images/avatar_g2.jpg'


function Portfolio() {
    return (
        <React.Fragment>
            <SideMenu />
            <div className="w3-main">
                <header id="portfolio">
                    <a href="##"><img src={avatarTwo} style={{width: "65px"}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" alt="portfolio avatar" /></a>
                    <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i className="fa fa-bars"></i></span>
                    <div className="w3-container">
                        <h1><b>My Portfolio</b></h1>
                        <div className="w3-section w3-bottombar w3-padding-16">
                            <span className="w3-margin-right">Filter:</span> 
                            <button className="w3-button w3-black">ALL</button>
                            <button className="w3-button w3-white"><i className="fa fa-diamond w3-margin-right"></i>Design</button>
                            <button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>Photos</button>
                            <button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Art</button>
                        </div>
                    </div>
                </header>

                <div className="w3-row-padding">
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src={mountains} alt="Norway" style={{width: "100%"}} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <br />
                            <p><b>Lorem Ipsum</b></p>
                            <br />
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src={lights} alt="Norway" style={{width: "100%"}} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <br />
                            <p><b>Lorem Ipsum</b></p>
                            <br />
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container">
                        <img src={nature} alt="Norway" style={{width: "100%"}} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <br />
                            <p><b>Lorem Ipsum</b></p>
                            <br />
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src={pictureOne} alt="Norway" style={{width: "100%"}} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <br />
                            <p><b>Lorem Ipsum</b></p>
                            <br />
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container w3-margin-bottom">
                        <img src={pictureTwo} alt="Norway" style={{width: "100%"}} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <br />
                            <p><b>Lorem Ipsum</b></p>
                            <br />
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                    <div className="w3-third w3-container">
                        <img src={pictureThree} alt="Norway" style={{width: "100%"}} className="w3-hover-opacity" />
                        <div className="w3-container w3-white">
                            <br />
                            <p><b>Lorem Ipsum</b></p>
                            <br />
                            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        </div>
                    </div>
                </div>

                <div className="w3-center w3-padding-32">
                    <div className="w3-bar">
                        <a href="##" className="w3-bar-item w3-button w3-hover-black">«</a>
                        <a href="##" className="w3-bar-item w3-black w3-button">1</a>
                        <a href="##" className="w3-bar-item w3-button w3-hover-black">2</a>
                        <a href="##" className="w3-bar-item w3-button w3-hover-black">3</a>
                        <a href="##" className="w3-bar-item w3-button w3-hover-black">4</a>
                        <a href="##" className="w3-bar-item w3-button w3-hover-black">»</a>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
  }
  
  export default Portfolio;
  