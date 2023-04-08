import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import './App.css'
import BookTable from './components/book-component'
import UserLoginPage from './components/user_components/user-login-page'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState("user-log-in");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // PageToRender cannot be a regular JS variable as it will contain a react component. Unless it is a 
  // rendering function, 
  const [PageToRender, setPageToRender] = useState(null);

  useEffect(() => {
    switch (currentPage) {
      case "books":
        setPageToRender(<BookTable />)
        break;
      case "user-log-in":
        setPageToRender(<UserLoginPage />)
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
      }} />

      {PageToRender}

    </div>
  )
}

export default App
