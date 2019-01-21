import React, { Component } from "react";
import "./Workspace_1.css";
import Nav from "../../../components/Nav";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

class Workspace_1 extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav
          contentUrl="/template_1/workspace_1/content_1"
          viewUrl="/template_1/workspace_1/view_1"
        />
        <div className="jumbotron mt-5 text-center">

        <Rotate top left cascade>
          <h2 className="instructions">Animx: An Instructional Guide</h2>
        </Rotate>
          <div className="containerInstructions" style={{ display: 'flex', justifyContent: 'center', }}>


       
            <ul>
              <li>1. Select your template.</li>
              <li>2. Enter your "About" content, including profile image, title, and a brief paragraph describing yourself, then click the submit button.</li>
              <li>3. Enter your "Portfolio" content, including portfolio images, titles, and descriptions, then click the submit button. </li>
              <li>3. Enter your "Contact" content, including portfolio images, titles, and descriptions, then click the submit button. </li>
              <li>5. Click "View" to see your automatically generated 3D animating website!</li>
            </ul>
          </div>

                 
        <div className="containerIMG" style={{ display: 'flex', justifyContent: 'center', }}>
           <div class="row">
           <Zoom left cascade>

             <div class="col-md-3">
            ABOUT+
            </div>
         

          
             <div class="col-md-3">
               PORTFOIO+
             </div>
         

       
             <div class="col-md-3">
               CONTACT==>
             </div>
       


             <div class="col-md-3">
               SUBMIT! 
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
