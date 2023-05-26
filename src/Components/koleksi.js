import React from "react";
import panggung1 from "../images/panggung1.JPG";
import pg3 from "../images/pg3.JPG";
import tg from "../images/tg.JPG";



class Koleksi extends React.Component {
    render (){
        return (
            <div className="koleksi">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Koleksi</h2>
                    <h3 className="section-subheading text-muted">Collection</h3>
                    <h3 className="section-subheading1 text-muted">ꦏꦺꦴꦭꦺꦏ꧀ꦱꦶ</h3>
                </div>
                    <div className="koleksi-container">
                        <div className="blog-poster">
                            <div className="poster">
                                <img className="poster-img" src={panggung1}></img>
                            <div className="poster-caption">
                                <h3>Panggung Krapyak</h3>
                                <span class="date">Yogyakarta</span>
                            </div>
                            </div>
                            <div className="poster">
                                <img className="poster-img" src={pg3}></img>
                            <div className="poster-caption">
                                <h3>Plengkung Gading</h3>
                                <span class="date">Yogyakarta</span>
                            </div>
                            </div>
                            <div className="poster">
                                <img className="poster-img" src={tg}></img>
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

export default Koleksi;
