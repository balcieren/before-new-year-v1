import { rgba } from "polished";
import { FC } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export type ThemeColor =
  | "layout"
  | "background"
  | "element"
  | "primary"
  | "success"
  | "danger"
  | "warning";

const theme = {
  colors: {
    layout: "36,37,38",
    background: "24,25,28",
    element: "58, 59, 60",
    primary: "#18dcff",
    success: "#32ff7e",
    danger: "#ff4d4d",
    warning: "#ffaf40",
  },
};

const Style = createGlobalStyle`
*{
  margin:0;
  padding:0;
}
html{
  body{
    font-family: 'Quicksand', sans-serif;
    background-image:url("./background/background.png");
    background-repeat: no-repeat;
    background-size:cover;
    background-position:center;    
    a{
      text-decoration:none;
    }
    textarea{
      font-family: 'Quicksand', sans-serif;
    }
  }
}


`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-height: 100%;
  background: ${rgba("white", 0.4)};
  backdrop-filter: blur(40px);
  z-index: 0;
`;

export const BackgroundColor = (color: ThemeColor) => {
  const index = Object.keys(theme.colors).find((value) => value === color);
  return color ? theme.colors[index] : theme.colors.primary;
};

const GlobalStyle: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Style />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default GlobalStyle;
