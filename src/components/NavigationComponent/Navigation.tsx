import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import lotus from "../../images/lotus.png";
import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

const Nav = styled.header`
  display: flex;

  .navigation_icon {
    color: ${secondary};
    width: 25px;
    height: 20px;
    padding: 5px;
  }

  img {
    width: 30px;
    height: 30px;
    padding: 5px;
  }

  h1 {
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
  }
  a {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .nav_header {
    align-items: center;
    text-align: center;
    display: inline-flex;
    @media (max-width: 600px) {
      text-align: center;
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
