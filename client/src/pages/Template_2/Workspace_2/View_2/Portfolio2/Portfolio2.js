import React from "react";
import pic1 from "./images/one.jpg";
import pic2 from "./images/two.jpg";
import pic3 from "./images/three.jpg";
import pic4 from "./images/four.jpg";
import pic5 from "./images/five.jpg";
import pic6 from "./images/six.jpg";



//const images = [pic1, pic2, pic3, pic4, pic5, pic6];
const Portfolio2 = props => {
    return (
        <div className="gallery">

            <div class="row">

                <div class="col-sm-4">
                    <img src={pic1} alt="1" class="pic"/>
                </div>

                <div class="col-sm-4">
                    <img src={pic2} alt="2" />
                </div>

                <div class="col-sm-4">
                    <img src={pic3} alt="3" />
                </div>
            </div>

            <div class="row">

                <div class="col-sm-4">
                    <img src={pic4} alt="4" />
                </div>

                <div class="col-sm-4">
                    <img src={pic5} alt="5" />
                </div>

                <div class="col-sm-4">
                    <img src={pic6} alt="6" />
                </div>
            </div>

        </div>

    )
};

export default Portfolio2;