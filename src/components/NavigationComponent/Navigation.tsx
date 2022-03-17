import { Link } from "react-router-dom";
import buda from "../../images/buda-logo.png";
import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

const Nav = styled.nav`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  align-items: center;
  z-index: 100;
  input[type="checkbox"]{
    appearance: none;
  }

  .hamburger-lines {
    display: none;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: auto;
  }
  .navbar-container {
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
  }
  .nav-links {
    order: 2;
    display: flex;
  }
  .logo {
    order: 1;
    font-size: 2.3rem;
  }
  img {
    height: 70px;
  }
  .nav-links li {
    list-style: none;
    margin-left: 50px;
    font-size: 18px;
  }
  a {
    color: ${primary};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
  }
  a:hover {
    color: ${secondary};
  }
  button {
    color: white;
    border: none;
    background-color: ${primary};
    padding: 10px 30px;
    border-radius: 6px;
    letter-spacing: 1px;
    font-size: inherit;
    width: 100%;
    transition: 0.15s;
  }

  @media (max-width: 769px) {
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }
  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }
  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }
  .navbar-container .hamburger-lines {
      display: block;
      height: 28px;
      width: 35px;
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .navbar-container .hamburger-lines .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #333;
    }

    .navbar-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.3s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.3s ease-in-out;
    }
    .nav-links{
        padding-top: 100px;
        background: #fff;
        height: 100vh;
        max-width: 300px;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        margin-left: -40px;
        padding-left: 40px;
        transition: transform 0.5s ease-in-out;
        box-shadow:  5px 0px 10px 0px #aaa;
        
    }
    .nav-links li{
      margin-bottom: 1.8rem;
      font-size: 18px;
      font-weight: 500;
    }
    img{
      position: absolute;
      top: 7px;
      right: 0px;
      height: 50px;
      width: 50px
        
    }
    .navbar-container input[type="checkbox"]:checked ~ .nav-links{
        transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
        transform: rotate(45deg);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
        transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
        transform: rotate(-45deg);
    }

}

  }
  @media (max-width: 769px){
    .navbar-container input[type="checkbox"]:checked ~ .logo{
        display: none;
    }
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <Nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/allsessions">The Sessions</a>
          </li>
          <li>
            <a href="/create">Create your own session</a>
          </li>
          <li>
            <a href="/mysessions">My Sessions</a>
          </li>
          <li>
            <Link className="login" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="login" to="/login">
              Create an account
            </Link>
          </li>
        </ul>
        <a href="/">
          <img src={buda} alt="logo" />
        </a>
      </div>
    </Nav>
  );
};

export default Navigation;
