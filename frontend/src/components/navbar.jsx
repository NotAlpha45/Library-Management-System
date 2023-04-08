import React from "react";
import "./navbar.css";

function Navbar({ appStatus }) {

    return (
        <div className="topnav">
            <button onClick={() => { appStatus.pageUtilities.setCurrentPage("home") }}>Home</button>
            <button onClick={() => { appStatus.pageUtilities.setCurrentPage("books") }}>Books</button>
            <button onClick={() => { appStatus.pageUtilities.setCurrentPage("admin") }}>Admin</button>
            <button className="split" onClick={() => { appStatus.pageUtilities.setCurrentPage("user-log-in") }}>
                {appStatus.authUtilities.isSignedIn ? "My Account" : "Sign In"}
            </button>
        </div>

    );
}

export default Navbar;
