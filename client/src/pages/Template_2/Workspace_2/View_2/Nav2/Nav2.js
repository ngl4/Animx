import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import ReactDOM from 'react-dom';
import Temp23D from "../3D2/Temp23d";
import About2 from "../About2";
import Menu from "./menu";
import Header from "./header";
import "./Nav2.css";
    
    class Nav2 extends Component {
      constructor(props) {
        super(props);
        this.state = { showMenu: true };
        this.toggleMenu = this.toggleMenu.bind(this);
    
      }
    
      toggleMenu = function() {
        this.setState({ showMenu: !this.state.showMenu });
      }

      
    
      render() {
        return (
          <div className="Nav2">
            {/* <Temp23D toggleMenu={this.toggleMenu}/>
            <About2 showMenu={this.state.showMenu}/> */}
                    <Header toggleMenu={this.toggleMenu}/>
            <Menu showMenu={this.state.showMenu}/>
          </div>
        );
      }
    }


export default Nav2;


ReactDOM.render(<Nav2 />, document.getElementById('root'));