import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";


class Header extends React.Component {
    render() {
        return (
            <div className="header-wraper">
         <div className="header-info">
            <h1>Selamat Datang Di Tourity</h1>
            <Typed
                className="header-typed-text"
                strings={["Mulai menjelajah sejarah bersama"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            
         </div>
         <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#ffb633"
              }
            }
          }
        }}/>
    </>
    </div>

        )
    }
}

export default Header;