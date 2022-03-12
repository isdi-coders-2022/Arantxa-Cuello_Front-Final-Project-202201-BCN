import styled from "styled-components";
import { primary } from "../../styles/globalStyles";

const Banner = styled.footer`
  background-color: ${primary};
  height: 100px;
  bottom: 0;
  position: absolute;
  width: 100%;

  h1 {
    font-size: 14px;
    text-align: center;
    align-item: center;
    color: white;
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
