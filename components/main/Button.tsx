import { rgba } from "polished";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { BackgroundColor, ThemeColor } from "theme/GlobalStyle";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ThemeColor;
  icon?: ReactNode;
  tile?: boolean;
  block?: boolean;
  circle?: boolean;
  border?: boolean;
  transparent?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button: FC<Props> = (props) => {
  const { children, icon, circle } = props;

  return (
    <ButtonWrapper {...props}>
      {icon}
      {!circle && children}
    </ButtonWrapper>
  );
};
export default Button;

const ButtonWrapper = styled.button<Props>`
  position: relative;
  display: inline-flex;
  column-gap: 5px;
  align-items: center;
  align-content: center;
  justify-content: center;
  outline: none;
  border: ${({ border, color }) =>
    border ? `2.5px solid ${BackgroundColor(color)}` : "none"};
  color: white;
  color: ${({ border, color }) => {
    if (border) return BackgroundColor(color);
    else return "white ";
  }};
  font-size: 1em;

  border-radius: ${({ tile, circle }) => (tile ? "0rem" : "1rem")};
  ${({ circle }) =>
    circle &&
    css`
      border-radius: 100%;
      padding: 5px !important;
    `};
  width: ${({ block }) => block && "100%"};
  padding: ${({ size }) => {
    switch (size) {
      case "sm":
        return "8px 16px";
      case "md":
        return "12px 24px";
      case "lg":
        return "16px 64px";
      default:
        return "12px 24px";
    }
  }};
  cursor: pointer;
  background: ${({ color, transparent, border }) => {
    if ((color && border) || (!color && border))
      return "transparent !important";
    if (color) return BackgroundColor(color) + " !important";
    if (transparent) return "transparent ";
    else return BackgroundColor("primary");
  }};
  box-shadow: ${({ color, transparent }) => {
    if (color) return `0px 13px 24px -7px ${rgba(BackgroundColor(color), 0.7)}`;
    if (transparent) return "none";
    else return `0px 13px 24px -7px ${rgba(BackgroundColor("primary"), 0.7)}`;
  }};
  backdrop-filter: blur(1px);
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease,
    color 0.1s ease;
  ::selection {
    background: transparent;
  }
  :hover,
  :active {
    ${({ border }) =>
      border &&
      css`
        color: #ffffff !important;
      `};
    background: ${({ transparent, color, border }) => {
      if (transparent || border) return BackgroundColor(color);
    }} !important;
    box-shadow: ${({ color, transparent }) => {
      if (color)
        return `0px 17px 16px -11px ${rgba(BackgroundColor(color), 0.4)}`;
      if (transparent)
        return `0px 17px 16px -11px ${rgba(BackgroundColor(color), 0.4)}`;
      else return `0px 17px 16px -11px ${rgba(BackgroundColor(color), 0.4)}`;
    }};
    transform: translateY(-5px);
  }
`;
