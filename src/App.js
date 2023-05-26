import React from "react";
import logodk1 from "../src/images/logodk1.png";
import Utama from "./Components/utama";
import "./App.css";
import { Link } from "react-router-dom";
import Footer from "./Components/footer";


class App extends React.Component {
  render (){
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand"><img src={logodk1}></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" 
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/history" className="nav-link" >HISTORY</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" >SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/kontak" className="nav-link">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Utama />
  <Footer />
  </div>
  
    );
  }
}

 
export default App;

