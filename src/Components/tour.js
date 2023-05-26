import React from "react";
import panggung1 from "../images/panggung1.JPG";
import pg3 from "../images/pg3.JPG";
import tg from "../images/tg.JPG";


class Tour extends React.Component {
    render (){
        return (
            <div className="karya-title">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Tur Virtual</h2>
                    <h3 className="section-subheading text-muted">Virtual Tour</h3>
                    <h3 className="section-subheading1 text-muted">ꦠꦸꦂ​ꦮ꦳ꦶꦂꦠꦸꦮꦭ꧀</h3>
                </div>
                    <div className="karya-container">
                        <div className="blog-poster">
                            <div className="poster">
                                <a href="http://103.100.27.72/pk">
                                <img className="poster-img" src={panggung1}></img>
                                </a>
                            <div className="poster-caption">
                                <h3>Panggung Krapyak</h3>
                                <span class="date">Yogyakarta</span>
                            </div>
                            </div>
                            <div className="poster">
                                <a href="http://103.100.27.72/pg">
                                <img className="poster-img" src={pg3}></img>
                                </a>
                            <div className="poster-caption">
                                <h3>Plengkung Gading</h3>
                                <span class="date">Yogyakarta</span>
                            </div>
                            </div>
                            <div className="poster">
                                <a href="http://103.100.27.72/tugu">
                                <img className="poster-img" src={tg}></img>
                                </a>
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

export default Tour;
