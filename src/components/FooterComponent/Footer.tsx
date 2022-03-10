import styled from "styled-components";
import { primary, secondary } from "../../styles/globalStyles";

const Banner = styled.footer`
  background-color: ${primary};
  height: 100px;

  h1 {
    font-size: 14px;
    text-align: center;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Banner>
      <h1>text here</h1>
    </Banner>
  );
};

export default Footer;
