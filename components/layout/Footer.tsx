import { rgba } from "polished";
import styled from "styled-components";
import { BackgroundColor } from "theme/GlobalStyle";

const Footer = () => {
  return (
    <FooterWrapper>
      <div />
      <div>
        <p>
          Created By{" "}
          <a href="https://github.com/UrduX" target="_blank">
            Eren Balcı
          </a>
        </p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.form`
  display: flex;
  height: auto;
  padding: 1rem;
  justify-content: space-between;
  align-items: flex-end;
  div,
  p {
    color: ${rgba("#000000", 0.8)};
    a {
      cursor: pointer;
      font-weight: 500;
      color: #000000;
      color: #000000;
      transition: color 0.3s ease;
      :hover {
        color: ${rgba("#000000", 0.5)};
      }
    }
  }
`;

export default Footer;
