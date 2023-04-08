import React, { useState } from "react";
import "./user-login-page.css";

const UserLoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // validate the email address
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 10000);
            return;
        }
        // make an API call to validate the user's credentials and receive a token
        const token = "example-token"; // replace with actual token received from the server
        localStorage.setItem("token", token);
        // redirect the user to the main page or perform any other actions necessary
    };

    return (
        <div className="user-login-page">

            <form onSubmit={handleSubmit} className="user-login-form">
                <label className="user-login-form-label">
                    Email:
                    <input
                        type="email"
                        className="user-login-form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className="user-login-form-label">
                    Password:
                    <input
                        type="password"
                        className="user-login-form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit" className="user-login-form-button">
                    Log In
                </button>
            </form>
        </div>
    );
};

export default UserLoginPage;
