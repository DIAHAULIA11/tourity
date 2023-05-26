import React from "react";
import { Link } from "react-router-dom";


class Services extends React.Component {
    render (){
        return (
    <div className="container1">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Servis</h2>
          <h3 className="section-subheading text-muted">Services</h3>
          <h3 className="section-subheading1 text-muted">ꦱꦺꦂꦮ꦳ꦶ</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
        ,<Link to="/tour">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-warning"></i>
            <i className="fa fa-university fa-stack-1x fa-inverse"></i>
          </span>
          </Link>
          <h4 className="service-heading">Virtual Tour</h4>
          <p className="text-muted">Membuat kamu merasakan berkeliling objek bersejarah secara nyata. Di dukung dengan teknologi VR (Virtual Reality).</p>
        </div>
        <div className="col-md-4">
          <Link to="/edukasi">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-warning"></i>
            <i className="fa fa-book fa-stack-1x fa-inverse"></i>
          </span>
          </Link>
          <h4 className="service-heading">Education</h4>
          <p className="text-muted">Belajar bersama tentang Sumbu Filosofis Yogyakarta.</p>
        </div>
        <div className="col-md-4">
          <Link to="/koleksi">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-warning"></i>
            <i className="fa fa-star fa-stack-1x fa-inverse"></i>
          </span>
          </Link>
          <h4 className="service-heading">Collection</h4>
          <p className="text-muted">Mengenal Sumbu Filosofis. Membantumu mengetahui bukti-bukti peninggalan sejarah.</p>
        </div>
      </div>
    </div>
        );
    }
}

export default Services;