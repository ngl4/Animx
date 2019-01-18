import React, { Component } from 'react';
import "./Nav2.css";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <nav className="main">

            <div className="menu">
              <button class="architect-button" onClick={this.props.toggleMenu}><i class="fas fa-bars"></i></button>
            </div>
 
        </nav>
      </header>
    );
  }
}

export default Header;