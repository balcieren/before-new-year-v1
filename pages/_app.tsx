import { AppProps } from "next/app";
import GlobalStyle from "theme/GlobalStyle";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Content from "components/layout/Content";
import styled from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyle>
      <Grid>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Grid>
    </GlobalStyle>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-rows: 10vh minmax(80vh, auto) 10vh;
`;

export default MyApp;
