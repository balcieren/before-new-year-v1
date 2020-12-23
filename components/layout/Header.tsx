import { rgba } from "polished";
import Link from "next/link";
import styled from "styled-components";
import Button from "components/main/Button";

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link href="/">
          <Title>Before New Year</Title>
        </Link>
      </Logo>
      <NavigationBar>
        <Navigate>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Navigate>
        <Navigate>
          <Link href="/notes?page=1">Notes</Link>
        </Navigate>
      </NavigationBar>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding: 0rem 1rem;
`;
const Logo = styled.div``;
const Title = styled.p`
  cursor: pointer;
  font-weight: 900;
  font-size: 1.75em;
`;
const NavigationBar = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  column-gap: 1rem;
`;
const Navigate = styled.li`
  list-style: none;

  a {
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 500;
    color: #000000;
    color: #000000;
    transition: color 0.3s ease;
    :hover {
      color: ${rgba("#000000", 0.5)};
    }
  }
`;

export default Header;
