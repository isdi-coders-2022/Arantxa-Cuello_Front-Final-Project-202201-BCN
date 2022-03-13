import styled from "styled-components";
import { primary } from "../../styles/globalStyles";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";

const Banner = styled.footer`
  background-color: ${primary};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: 100vw;
  padding-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Banner>
      <div className="footer-content">
        <ul>
          <li>
            <img src={facebook} alt="facebook-logo" />
          </li>
          <li>
            <img src={instagram} alt="facebook-logo" />
          </li>
          <li>
            <img src={twitter} alt="facebook-logo" />
          </li>
        </ul>
      </div>
      <h1>text here</h1>
    </Banner>
  );
};

export default Footer;
