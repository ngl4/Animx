import React, { Component } from "react";
import "./Contact2.css";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Nav2 from "../Nav2";
import Foot2 from "../Foot2";

class Contact2 extends Component {

    render() {
        return (

            <Flip left cascade>
            <Nav2 />
       

            <div className="contact-container-two">
             
            <p class="contentArch">
                CONTACT ME:
            </p>
            <p class="archContact">
            Ipsum nunc aliquet bibendum enim.
            Ullamcorper malesuada proin libero nunc consequat interdum
            varius sit amet. Vitae congue mauris rhoncus aenean.
        
        
            </p>
                <div class="centering">
                    <div className="row" id="contactFA">

                        <div class="envelope">
                            <i class="fas fa-envelope" id="font"></i>
                        </div>

                        <div id="emailID">
                            EMAIL@EMAIL.COM
                    </div>
                    </div>

                    <div className="row" id="contactFA">

                        <div class="col-sm-2">
                            <i class="fab fa-linkedin-in" id="font"></i>
                        </div>

                        <div class="col-sm-2">
                            <i class="fab fa-github" id="font"></i>
                        </div>

                        <div class="col-sm-2">
                            <i class="fab fa-twitter" id="font"></i>
                        </div>

                        <div class="col-sm-2">
                            <i class="fab fa-instagram" id="font"></i>
                        </div>

                        <div class="col-sm-2">
                            <i class="fab fa-facebook-square" id="font"></i>
                        </div>
                    </div>
                    </div>

            
            </div>
            <Foot2 />
            </Flip>

        );
    }
}

export default Contact2;  