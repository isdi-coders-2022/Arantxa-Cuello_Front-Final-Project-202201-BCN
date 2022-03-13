import styled from "styled-components";
import { primary } from "../../styles/globalStyles";
import facebook from "../../images/facebook.png";

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
`;

const Footer = (): JSX.Element => {
  return (
    <Banner>
      <div className="footer-content">
        <img src={facebook} alt="" />
      </div>
      <h1>text here</h1>
    </Banner>
  );
};

export default Footer;
