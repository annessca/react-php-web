import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../vendor/select2/select2.min.css';
import '../vendor/daterangepicker/daterangepicker.css';
import '../css/util.css';
import '../css/main.css';
import '../css/customOne.css';

class Register extends React.Component  { 
    state = {
        fullname: '',
        username: '',
        password: '',
        confirmpass: '',
        aboutme: '',
        registeredUser: false
    }

    handleRegister = (e) => {
        e.preventDefault();

        let userDetails = new FormData();
        userDetails.append('fullname', this.state.fullname)
        userDetails.append('username', this.state.username)
        userDetails.append('password', this.state.password)
        userDetails.append('repass', this.state.confirmpass);
        userDetails.append('aboutme', this.state.aboutme)

        // Check for empty form fields
        for (let val of userDetails.values()){
            if (val.length < 1) return; 
        }

        // Password confirmation
        let passwordConfirm = (userDetails.get('password') === userDetails.get('repass'));
        if(!passwordConfirm) {
            alert('Your password and password confirmation do not match!');
            return;
        } else {
            userDetails.delete('repass');
        }
        
        axios({
            method: 'post',
            url: "http://localhost/travelpaddybackend/phpapi/createusers.php",
            data: userDetails,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then((response) => {
                if (response.data.message === "User Created") {
                    this.setState({ registeredUser: true });
                    console.log(response.data);
                }
          })
          .catch((response) => {
            console.log(response.data.message)
        });
    }

    render() {
        if (this.state.registeredUser === true) {
            return <Redirect to="/" />
        }
        return (
            <React.Fragment>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                            <form className="login100-form flex-sb flex-w">
                                <span className="login100-form-title p-b-32">
                                    Account Registration
                                </span>

                                <span className="txt1 p-b-11">
                                    Fullname
                                </span>
                                <div className="wrap-input100 validate-input m-b-36">
                                    <input className="input100" type="text" name="fullname" value={this.state.fullname} onChange={e => this.setState({ fullname: e.target.value })} />
                                    <span className="focus-input100"></span>
                                </div>

                                <span className="txt1 p-b-11">
                                    Username
                                </span>
                                <div className="wrap-input100 validate-input m-b-36">
                                    <input className="input100" type="text" name="username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                                    <span className="focus-input100"></span>
                                </div>
                        
                                <span className="txt1 p-b-11">
                                    Password
                                </span>
                                <div className="wrap-input100 validate-input m-b-12">
                                    <span className="btn-show-pass">
                                        <i className="fa fa-eye"></i>
                                    </span>
                                    <input className="input100" type="password" name="pass" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                    <span className="focus-input100"></span>
                                </div>
                        
                                <span className="txt1 p-b-11">
                                    Re-Password
                                </span>
                                <div className="wrap-input100 validate-input m-b-12">
                                    <span className="btn-show-pass">
                                        <i className="fa fa-eye"></i>
                                    </span>
                                    <input className="input100" type="password" name="repass" value={this.state.confirmpass} onChange={e => this.setState({ confirmpass: e.target.value })} />
                                    <span className="focus-input100"></span>
                                </div>
                        
                                <span className="txt1 p-b-11">
                                    About Me
                                </span>
                                <div className="wrap-input100 validate-input m-b-12">
                                    <textarea className="input100" rows="8" col="15" name="about" value={this.state.aboutme} onChange={e => this.setState({ aboutme: e.target.value })} style={{height: "100px !important"}}></textarea>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <input onClick={this.handleRegister} to="/home" className="login100-form-btn" value="Register" type="submit" />
                                    <Link to="/" className="login100-form-btn">
                                        Sign In?
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div id="dropDownSelect1"></div>
            </React.Fragment>
        );
    }
}


export default Register;