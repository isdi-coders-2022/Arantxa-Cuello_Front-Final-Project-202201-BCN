import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import lotus from "../../images/lotus.png";
import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

const Nav = styled.header`
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 25px;
  margin-left: 25px;
  .nav_bar {
    text-align: center;
    padding: 5px 5px 2px 5px;
    position: fixed;
  }
  .fa-bars {
    color: ${secondary};
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    margin: 0;
    padding: 0;
    border: none;
    font-size: 0;
    background: transparent;
    cursor: pointer;
  }
  input[type="checkbox"]{
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    margin: 0;
    padding: 0;
    border: none;
    font-size: 0;
    background: transparent;
    cursor: pointer;
  }
  .nav_menu a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 20px;
  max-width: 200px;
  }
  .nav_header {
    margin-left: 45px;
    display: flex;
    align-items:center;
  }
    @media (max-width: 600px) {
      text-align: center;
    }
  }
  .nav_menu input[type="checkbox"], .nav_menu .fa-times {
    position:absolute;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    right: 0;
    top: 0;
    width: 48px;
    height: 48px;
    cursor: pointer
  }
  .nav_menu .fa-bars, .nav_menu .fa-times {
    font-size: 48px;
    pointer-events: none;
  }
  .nav_menu {
    color: white;
  position: relative;
  background: ${secondary};
  min-height: 48px;
  }
  .nav_menu input[type="checkbox"]{
     opacity: 0;
  }
   .nav_menu nav {
    display: none;
  }
  .nav_menu input:checked ~ nav {
  display: block;
  }
  .nav_menu input:checked ~ .fa-bars {
  display: none;
  }
  .nav_menu input:not(:checked) ~ .fa-times {
  display: none;
  }
  img {
    width: 30px;
    height: 30px;
    padding: 5px;
    margin-right: 20px;
  }

  .nav_header h1 {
    font-size: 18px;
    color: #666;
    font-weight: 300;
    @media (max-width: 600px) {
      display: none;
      text-align: center;
    }
  }

  button {
    @media (max-width: 600px) {
      display: none;
    }
    background-color: ${primary};
    border-radius: 6px;
    padding: 8px 24px;
    border: none;
    padding: 10px 30px;
    width: 100%;
    color: white;
    transition: 0.15s;
    cursor: pointer;
    
  }
  a {
    
    text-decoration: none;
    color: ${primary};
    margin-left: 500px;
    @media (max-width: 600px) {
      display: none;
    }
  }
  
  li{
    list-style: none;
    padding: 40px;
  }
  
`;

const Navigation = (): JSX.Element => {
  return (
    <Nav className="nav_bar">
      <div className="nav_menu">
        <input type="checkbox" />
        <FontAwesomeIcon className="fa-bars" icon={faBars} />
        <FontAwesomeIcon className="fa-times" icon={faTimes} />
        <nav>
          <ul>
            <li>
              <a href="/allsessions">The Sessions</a>
            </li>
            <li>
              <a href="/allsessions">Create your own session</a>
            </li>
            <li>
              <a href="/allsessions">My Sessions</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav_header">
        <img src={lotus} alt="logo" />
        <h1>
          <Link to="/">Your meditation space</Link>
        </h1>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <button>Create an account</button>
      </div>
    </Nav>
  );
};

export default Navigation;
