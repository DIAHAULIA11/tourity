import React from "react";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

class Kontak extends React.Component {
    render(){
        return(
            <div className="container2">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Hubungi Kami</h2>
                        <h3 className="section-subheading text-muted">Contact Us</h3>
                        <h3 className="section-subheading1 text-muted" >ꦲꦸꦧꦸꦔꦶ​ꦏꦩꦶ</h3>
                        
                    </div>
                    <div className="kontak-wraped">
                        <div className="kontak-info">
                            <div className="kontak-card">
                                <a href="https://mail.google.com/" className="card-info">
                                    <MdEmail color="#ffd700" size="2.5rem" />
                                </a>
                                <p>sumbufilosofis@gmail.com</p>
                            </div>

                            <div className="kontak-card">
                                <a href="#" className="card-info">
                                    <MdCall color="#ffd700" size="2.5rem"/>
                                </a>
                                <p>081234567890</p>
                            </div>

                            <div className="kontak-card">
                                <a href="https://g.page/globalintermedia?share" className="card-info">
                                    <SiGooglemaps color="#ffd700" size="2.5rem"/>
                                </a>
                                <p>Yogyakarta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kontak;