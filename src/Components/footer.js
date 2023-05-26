import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";



class Footer extends React.Component {
    render(){
        return(
        <div className="footer-container">
            <div className="footer-icon">
                <a href="https://www.instagram.com/diahakp/" className="icon">
                        <AiFillInstagram color="white" size="2rem" />
                 </a>
                 <a href="" className="icon">
                        <IoLogoFacebook color="white" size="2rem"/>
                 </a>
                 <a href="#"  className="icon">
                        <FaTwitter color="white" size="2rem"/>
                 </a>
            </div>
            <p></p>
            <p className="copyright">&copy;{new Date().getFullYear()} Copyright | Sumbu Filosofis Team</p>
        </div>
        )
    }
}

export default Footer;