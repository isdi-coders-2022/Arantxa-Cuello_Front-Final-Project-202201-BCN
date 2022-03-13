import styled from "styled-components";
import { primary } from "../../styles/globalStyles";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";

const Banner = styled.footer`
  background-color: ${primary};
  box-sizing: border-box;
  border: none;
  bottom: 0;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 40px;
  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin-bottom: 0px;
  }
  li {
    margin: 0 10px;
  }
  .footer-content h1 {
    color: white;
    text-align: center;
    font-size: 13px;
    font-weight: normal;
  }
  @media (max-width: 600px) {
    ul {
      display: flex;
      margin-top: 10px;
      margin-bottom: 20px;
    }
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
            <img src={instagram} alt="instagram-logo" />
          </li>
          <li>
            <img src={twitter} alt="twitter-logo" />
          </li>
        </ul>
        <h1>Mindfulness©</h1>
      </div>
    </Banner>
  );
};

export default Footer;
