import React, { Component } from "react";
import "./Contact2.css";
import Zoom from 'react-reveal/Zoom';

class Contact2 extends Component {

    render() {
        return (


            <div className="contact-container-two">
                <Zoom Cascade Up>

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

                </Zoom>
            </div>
        );
    }
}

export default Contact2;  