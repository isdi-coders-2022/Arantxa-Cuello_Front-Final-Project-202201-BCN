import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
  .nav_header {
    margin-left: 45px;
    display: flex;
    align-items:center;
  }
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  .navigation_icon {
    color: ${secondary};
    width: 25px;
    height: 20px;
    padding: 5px;
    cursor: pointer
  }

  img {
    width: 30px;
    height: 30px;
    padding: 5px;
    margin-right: 20px;
  }

  h1 {
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
`;

const Navigation = (): JSX.Element => {
  return (
    <Nav className="nav_bar">
      <div>
        <FontAwesomeIcon className="navigation_icon" icon={faBars} />
      </div>
      <div className="nav_header">
        <img src={lotus} alt="logo" />
        <h1>Your meditation space</h1>
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
