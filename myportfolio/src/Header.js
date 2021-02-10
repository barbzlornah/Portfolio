import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className = "header-wraper">
            <div className = "main-info">
                <Typed
                 className = "typed-text"
                 strings = {["Software Development","Software Design","Software Quality Assurance",
                             "Software Support And Maintenance","Full Stack Web Development","Data Analysis",
                             "Machine Learning"]}
                 typeSpeed = {40}
                 backSpeed = {60}
                 loop
                />
            </div>
            
        </div>
    )
}

export default Header;
