import React from "react";
import panggung1 from "../images/panggung1.JPG";
import pg3 from "../images/pg3.JPG";
import tg from "../images/tg.JPG";
import { Link } from "react-router-dom";


class Edukasi extends React.Component {
    render (){
        return (
            <div className="edukasi">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Edukasi</h2>
                    <h3 className="section-subheading text-muted">Education</h3>
                    <h3 className="section-subheading1 text-muted">ꦌꦢꦸꦏꦱ꧀</h3>
                </div>
                    <div className="edukasi-container">
                        <div className="blog-poster">
                            <div className="poster">
                                <Link to="/edupk">
                                <img className="poster-img" src={panggung1}></img>
                                </Link>
                            <div className="poster-caption">
                                <h3>Panggung Krapyak</h3>
                                <span class="date">Yogyakarta</span>
                            </div>
                            </div>
                            <div className="poster">
                                <Link to="/edupg">
                                <img className="poster-img" src={pg3}></img>
                                </Link>
                            <div className="poster-caption">
                                <h3>Plengkung Gading</h3>
                                <span class="date">Yogyakarta</span>
                            </div>
                            </div>
                            <div className="poster">
                                <Link to="edutugu">
                                <img className="poster-img" src={tg}></img>
                                </Link>
                            <div className="poster-caption">
                                <h3>Tugu Yogyakarta</h3>
                                <span class="date">Yogyakarta</span>
                        
                            </div>
                            </div>
                         </div>
                    </div>
                </div>
        );
    }
}

export default Edukasi;
