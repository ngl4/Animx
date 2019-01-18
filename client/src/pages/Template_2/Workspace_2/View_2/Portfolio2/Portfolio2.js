import React from "react";
import { Component } from "react";
import "./Portfolio2.css";
import Nav2 from "../Nav2";
import pic1 from "./images/one.jpg";
import pic2 from "./images/two.jpg";
import pic3 from "./images/three.jpg";
import pic4 from "./images/four.jpg";
import pic5 from "./images/five.jpg";
import pic6 from "./images/six.jpg";
import Zoom from 'react-reveal/Zoom';


const images = [pic1, pic2, pic3, pic4, pic5, pic6];
class Portfolio2 extends Component {
    render() {
        return (

            <Zoom Cascade>
            <Nav2 />

        <div className="gallery" id="fontStyle">
      
            <div className="row">

                <div className="col-sm-4">
                    <img src={pic1} alt="1" class="pic"/>
                    <h5 className="card-title">DESIGN 1</h5>
                    Amet nisl purus in mollis nunc. Dignissim suspendisse in est ante 
                    in nibh mauris cursus mattis. Dignissim suspendisse in est ante in 
                    nibh mauris cursus.
                </div>

                <div class="col-sm-4">
                    <img src={pic2} alt="2" />
                    <h5 className="card-title">DESIGN 2</h5>
                    Odio ut sem nulla pharetra diam sit. Aliquam vestibulum morbi blandit 
                    cursus. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum.
                </div>

                <div class="col-sm-4">
                    <img src={pic3} alt="3" />
                    <h5 className="card-title">DESIGN 3</h5>
                    Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. 
                    Quam nulla porttitor massa id neque aliquam vestibulum morbi
                </div>
            </div>

            <div class="row">

                <div class="col-sm-4">
                    <img src={pic4} alt="4" />
                    <h5 className="card-title">DESIGN 4</h5>
                    Urna duis convallis convallis tellus id interdum velit. Est velit egestas dui 
                    id ornare arcu odio ut. Lacus luctus accumsan tortor posuere ac.
                </div>

                <div class="col-sm-4">
                    <img src={pic5} alt="5" />
                    <h5 className="card-title">DESIGN 5</h5>
                    Volutpat maecenas volutpat blandit aliquam 
                    etiam erat. Pharetra magna ac placerat vestibulum lectus mauris.
                </div>

                <div class="col-sm-4">
                    <img src={pic6} alt="6" />
                    <h5 className="card-title">DESIGN 6</h5>
                    Atempus egestas sed sed risus pretium quam vulputate dignissim. Lectus sit amet 
                    est placerat in egestas erat.
                </div>
            </div>

        </div>
    </Zoom>

    )
}
};

export default Portfolio2;