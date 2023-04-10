import axios from "axios"
import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import './App.css'
import BookTable from './components/book-component'
import UserLoginPage from './components/user_components/user-login-page'
import HomePage from './components/homepage_components/home'


function App() {

  const [currentPage, setCurrentPage] = useState("home");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [PageToRender, setPageToRender] = useState(null);
  const [tokenVerfied, setTokenVerfied] = useState(false);

  async function verifyToken() {
    await axios.get(
      "http://localhost:5000/verify-token",
      {
        headers: {
          "authtoken": userToken
        }
      }
    ).then((res) => {

      setTokenVerfied(true);

    }).catch((error) => {

      setTokenVerfied(false);

    })
  }

  useEffect(() => {

    setUserToken(localStorage.getItem("userToken"));
    verifyToken();

    switch (currentPage) {
      case "books":
        if (tokenVerfied) {
          setPageToRender(<BookTable />)
        }
        break;

      case "user-log-in":
        setPageToRender(<UserLoginPage userToken={userToken} setUserToken={setUserToken} setCurrentPage={setCurrentPage} />)
        break;

      case "home":
        setPageToRender(<HomePage />)
        break;

      default:
        break;
    }
  }, [currentPage, isSignedIn])


  return (
    <div className="App">

      <Navbar appStatus={{
        pageUtilities: {
          currentPage: currentPage,
          setCurrentPage: setCurrentPage
        },
        authUtilities: {
          isSignedIn: isSignedIn,
          setIsSignedIn: setIsSignedIn
        }
      }} userToken={userToken} setUserToken={setUserToken} />

      {PageToRender}

    </div>
  )
}

export default App
