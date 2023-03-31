import React from "react";
import "./navbar.css";

function Navbar() {

    const [isSignedIn, setIsSignedIn] = React.useState(false);

    return (
        <div className="topnav">
            <button href="#home">Home</button>
            <button href="#news">Books</button>
            <button href="#contact">Admin</button>
            <button href="#about" className="split">
                {isSignedIn ? "My Account" : "Sign In"}
            </button>
        </div>

    );
}

export default Navbar;
