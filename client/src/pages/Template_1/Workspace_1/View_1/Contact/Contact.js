import React, { Component } from "react";
import "./Contact.css";
import Zoom from 'react-reveal/Zoom';

class Contact extends Component {

    render() {
        return (


            <div className="contact-container">
                <Zoom Cascade Up>

                    CONTACT ME:
            <div class="content">Ipsum nunc aliquet bibendum enim.
                            Ullamcorper malesuada proin libero nunc consequat interdum
                            varius sit amet. Vitae congue mauris rhoncus aenean.
        
        
            </div>
                    <div className="row" id="faicons">

                        <div class="col-sm-1">
                            <i class="fas fa-envelope"></i>
                        </div>

                        <div class="col-sm-.1" id="email">
                            EMAIL@EMAIL.COM
                    </div>
                    </div>

                    <div className="row" id="faicons">

                        <div class="col-sm-1">
                            <i class="fab fa-linkedin-in"></i>
                        </div>

                        <div class="col-sm-1">
                            <i class="fab fa-github"></i>
                        </div>

                        <div class="col-sm-1">
                            <i class="fab fa-twitter"></i>
                        </div>

                        <div class="col-sm-1">
                            <i class="fab fa-instagram"></i>
                        </div>

                        <div class="col-sm-1">
                            <i class="fab fa-facebook-square"></i>
                        </div>
                    </div>

                </Zoom>
            </div>
        );
    }
}

export default Contact;  