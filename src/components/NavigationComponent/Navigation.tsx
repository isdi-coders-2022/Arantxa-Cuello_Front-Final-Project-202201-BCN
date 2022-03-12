import { Link } from "react-router-dom";
import buda from "../../images/buda-logo.jpg";
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
  opacity: 0.85;
  align-items: center;
  z-index: 100;
  input[type="checkbox"],
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
    font-size: 1.3rem;
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
            <a href="/allsessions">Create your own session</a>
          </li>
          <li>
            <a href="/allsessions">My Sessions</a>
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
