import React, { Component } from "react";
import "./Workspace_1.css";
import Nav from "../../../components/Nav";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Step1 from "./instructional_images/step1.png";
import Step2 from "./instructional_images/step2.png";
import Step3 from "./instructional_images/step3.png";
import Step4 from "./instructional_images/step4.png";


class Workspace_1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="jumbotron text-center mb-0">

        <Rotate top left cascade>
          <h2 className="instructions heading-title">animx: an Instructional Guide</h2>
        </Rotate>
          <div className="containerInstructions" style={{ display: 'flex', justifyContent: 'center', }}>


          <Zoom top left cascade>
            <ul>
              <li className="step-font">1. Select "content" to insert information: </li>
              <br />
              <img src={Step1} alt="step1"/>
              <br /><br /><br />
              <li className="step-font">2. You will see a page similar to this: </li>
              <br />
              <img src={Step2} className="step-img" alt="step2"/>
              <br /><br /><br />
              <li className="step-font">3. Insert Information, see example below: </li>
              <br />
              <img src={Step3} className="step-img" alt="step3"/>
              <br /><br /><br />
              <li className="step-font">4. Click on view to preview the page: </li>
              <br />
              <img src={Step1} alt="step4"/>
              <br /><br /><br />
              <li className="step-font">5. Here is an example of how it will look:</li>
              <br />
              <img src={Step4} className="step-img" alt="step5"/>
              <br /><br /><br />
            </ul>
            </Zoom>
          </div>

          
        <div className="containerIMG" style={{ display: 'flex', justifyContent: 'center', }}>
           <div class="row">
           <Zoom left cascade>
             <div class="col-md-3">
              <span className="heading-title">are you ready to </span><a href="/template_1/workspace_1/content_1" className="animx-color"><strong>start</strong></a>
             </div>
             </Zoom>
         </div>
         </div>
        </div>

      </div>

    );
  }
}

export default Workspace_1;
