import React from 'react';
import Footer from './Footer.js';
import SideMenu from './SideMenu';
import avatarOne from '../images/avatar_g.jpg'
import meTwo from '../images/me2.jpg';

function Home() {
    return (
        <React.Fragment>
            <SideMenu />
            <div className="w3-main">
                <div className="w3-row-padding w3-padding-16" id="about">
                    <div className="w3-col m6">
                        <img src={avatarOne} className="top-level-home-images" alt="Me" />
                    </div>
                    <div className="w3-col m6">
                        <img src={meTwo} className="top-level-home-images" alt="Me" />
                    </div>
                </div>

                <div className="w3-container w3-padding-large" id="about-me-section">
                    <h4><b>About Me</b></h4>
                    <br />
                    <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    <br /> <br />
        
                    <h4>Technical Skills</h4>
                    <br />
                    <p>Photography</p>
                    <br />
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-padding w3-center" id="skillset1">95%</div>
                    </div>
                    <br />
                    <p>Web Design</p>
                    <br />
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-padding w3-center" id="skillset2">85%</div>
                    </div>
                    <br />
                    <p>Photoshop</p>
                    <br />
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-padding w3-center" id="skillset3">80%</div>
                    </div>
                    <br />
                    <p>
                        <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
                            <i className="fa fa-download w3-margin-right"></i>Download Resume
                        </button>
                    </p>
                    <hr />
        
                    <h4>How much I charge</h4>
                    <br />
                    <div className="w3-row-padding pricing-section">
                        <div className="w3-third w3-margin-bottom">
                            <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                                <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
                                <li className="w3-padding-16">Web Design</li>
                                <li className="w3-padding-16">Photography</li>
                                <li className="w3-padding-16">1GB Storage</li>
                                <li className="w3-padding-16">Mail Support</li>
                                <li className="w3-padding-16">
                                    <h2>$ 10</h2>
                                    <span className="w3-opacity">per month</span>
                                </li>
                                <li className="w3-light-grey w3-padding-24">
                                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                                </li>
                            </ul>
                        </div>
        
                        <div className="w3-third w3-margin-bottom">
                            <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                                <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
                                <li className="w3-padding-16">Web Design</li>
                                <li className="w3-padding-16">Photography</li>
                                <li className="w3-padding-16">50GB Storage</li>
                                <li className="w3-padding-16">Endless Support</li>
                                <li className="w3-padding-16">
                                    <h2>$ 25</h2>
                                    <span className="w3-opacity">per month</span>
                                </li>
                                <li className="w3-light-grey w3-padding-24">
                                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                                </li>
                            </ul>
                        </div>
        
                        <div className="w3-third">
                            <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                                <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
                                <li className="w3-padding-16">Web Design</li>
                                <li className="w3-padding-16">Photography</li>
                                <li className="w3-padding-16">Unlimited Storage</li>
                                <li className="w3-padding-16">Endless Support</li>
                                <li className="w3-padding-16">
                                    <h2>$ 25</h2>
                                    <span className="w3-opacity">per month</span>
                                </li>
                                <li className="w3-light-grey w3-padding-24">
                                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
  }
  
  export default Home;
  