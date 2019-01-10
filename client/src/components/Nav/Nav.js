// import React, {Component} from "react";
import React from "react";
import "./Nav.css";


//Nav is for The Workspace pages of Each Templates 

const Nav = (props) => (

        <nav className="p-3 fixed-top nav-background">
        <div className="container d-flex justify-content-between text-white font-weight-bold">
        <div className="d-flex">
            <div className="pt-3 pr-3 animx-subtitle"><a href={props.contentUrl} className="animx-color">content</a></div>
            <div className="pt-3 pr-2 animx-subtitle"></div>
            <div className="pt-3 pl-2 animx-subtitle"><a href={props.viewUrl} className="animx-color">view</a></div>
        </div>
          
          <div className=" animx-font mr-5"><a href="/" className="animx-color">animX</a></div>
          {/* <div className="header-midtitle">{title}</div> */}
          <div  className="pt-3 pl-2 animx-subtitle">
           {/* <div className="pt-2 pr-2 animx-login">Login</div>
           <div className="pt-2 pr-2 animx-login">|</div>
           <div className="pt-2 pl-2 animx-login"> Sign Up</div> */}
            account
          </div>  
        </div>
      </nav>


);

// class Nav extends Component {

//   render(props) {
//     return (
//       <nav className="p-3 fixed-top nav-background">
//         <div className="container d-flex justify-content-between text-white font-weight-bold">
//         <div className="d-flex">
//             <div className="pt-3 pr-3 animx-subtitle"><a href={props.contentUrl} className="animx-color">content</a></div>
//             <div className="pt-3 pr-2 animx-subtitle"></div>
//             <div className="pt-3 pl-2 animx-subtitle"><a href={props.viewUrl} className="animx-color">view</a></div>
//         </div>
          
//           <div className=" animx-font mr-5"><a href="/" className="animx-color">animX</a></div>
//           {/* <div className="header-midtitle">{title}</div> */}
//           <div  className="pt-3 pl-2 animx-subtitle">
//            {/* <div className="pt-2 pr-2 animx-login">Login</div>
//            <div className="pt-2 pr-2 animx-login">|</div>
//            <div className="pt-2 pl-2 animx-login"> Sign Up</div> */}
//             account
//           </div>  
//         </div>
//       </nav>
//     );
//   }
// }

export default Nav;
