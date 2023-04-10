import React, { useState } from "react";
import "./user-login-page.css";
import axios from "axios";

const UserLoginPage = ({ userToken, setUserToken, setCurrentPage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const handleSubmit = async (event) => {
        event.preventDefault();
        // validate the email address
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 10000);
            return;
        }
        // make an API call to validate the user's credentials and receive a token
        await axios.post(
            "http://localhost:5000/login-user",
            {
                email: email,
                password: password
            }
        ).then((res) => {
            const token = res.data.user_token;

            setUserToken(token);

            localStorage.setItem("userToken", token);

            alert("You are logged in");

            setCurrentPage("home");

        }).catch((error) => {
            alert("Login failed. Check your email and password");
            setUserToken("")
            localStorage.setItem("userToken", "");
        })


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
