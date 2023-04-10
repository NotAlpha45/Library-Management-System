import React from "react";
import "./navbar.css";

function Navbar({ appStatus, userToken, setUserToken }) {

    function signOut() {
        setUserToken("");
        localStorage.setItem("userToken", "");
        alert("You are signed out");
    }

    React.useEffect(() => {
        setUserToken(localStorage.getItem("userToken"));
    }, [userToken])

    return (
        <div className="topnav">
            <button onClick={() => { appStatus.pageUtilities.setCurrentPage("home") }}>Home</button>
            <button onClick={() => { appStatus.pageUtilities.setCurrentPage("books") }}>Books</button>
            <button onClick={() => { appStatus.pageUtilities.setCurrentPage("admin") }}>Admin</button>

            {userToken ? (
                <button className="split" onClick={() => { signOut(); appStatus.pageUtilities.setCurrentPage("home") }}>
                    Sign Out
                </button>
            ) : (
                <button className="split" onClick={() => { appStatus.pageUtilities.setCurrentPage("user-log-in") }}>
                    Sign In
                </button>
            )}


        </div>

    );
}

export default Navbar;
