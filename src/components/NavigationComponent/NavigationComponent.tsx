import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import lotus from "../../images/lotus.png";
import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

const Nav = styled.header`
  .navigation_icon {
    color: ${secondary};
    width: 25px;
    height: 20px;
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <Nav className="nav_bar">
      <div>
        <FontAwesomeIcon className="navigation_icon" icon={faBars} />
      </div>
      <div>
        <img src={lotus} alt="logo" />
      </div>
      <h1>Your meditation space</h1>
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
