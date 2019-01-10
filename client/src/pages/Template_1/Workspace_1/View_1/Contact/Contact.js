import React, { Component } from "react";
import "./Contact.css";
import ScrollableAnchor from "react-scrollable-anchor";


class Contact extends Component {

    render() {
        return (


            <div className="contact-container">
                <ScrollableAnchor id={'section4'}>
                <div>
                    CONTACT ME BLURB:
            <div class="content">Ipsum nunc aliquet bibendum enim.
                    Ullamcorper malesuada proin libero nunc consequat interdum
                    varius sit amet. <a href="./" id="linkhover">Vitae congue mauris rhoncus aenean.</a>
            </div>

                </div>


                <div className="row" id="faicons">

                    <div class="col-sm-1">
                        <i class="fas fa-envelope"></i>
                    </div>

                    <div class="col-sm-.1" id="email">
                        EMAIL@EMAIL.COM
                    </div>
                </div>

                <div className="row" id="faicons1">

                    <div class="col-sm-1">
                        <i class="fab fa-linkedin-in"></i>
                    </div>

                    <div class="col-sm-1">
                        <i class="fab fa-github"></i>
                    </div>

                    <div class="col-sm-1">
                        <i class="fab fa-google-plus-g"></i>
                    </div>

                </div>
                </ScrollableAnchor>
            </div>
        );
    }
}

export default Contact;  