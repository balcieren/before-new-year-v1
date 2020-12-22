import { ForwardRefComponent, motion } from "framer-motion";
import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import styled from "styled-components";
import { BackgroundColor, ThemeColor } from "theme/GlobalStyle";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  borderColor?: ThemeColor;
  icon?: ReactNode;
  border?: boolean;

  tile?: boolean;
  forwardedRef?: ForwardedRef<HTMLTextAreaElement>;
}

const TextArea: ForwardRefComponent<any, Props> = forwardRef(
  (props, forwardedRef) => {
    const { icon } = props;
    return (
      <InputWrapper>
        <Icon>{icon}</Icon>
        <TextInput ref={forwardedRef} {...props} />
      </InputWrapper>
    );
  }
);

const InputWrapper = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ tile }) => (tile ? "0px" : "1rem")};
`;
const TextInput = styled.textarea<Props>`
  position: relative;
  display: flex;
  padding: 1rem !important;
  outline: none;
  width: 100%;
  height: 3rem;
  resize: none;
  overflow: auto;
  font-size: 1em;
  padding: 0rem 1rem;
  background: ${({ border }) => (border ? "transparent" : "#ffffff")};
  border: ${({ border }) => (border ? "2.5px solid #ffffff" : "none")};
  border-radius: ${({ tile }) => (tile ? "0px" : "1rem")};
  padding-left: ${({ icon }) => icon && "2rem"};
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: 0px 13px 24px -7px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0px 17px 16px -11px rgba(0, 0, 0, 0.2);
  }
  :focus {
    border-color: ${({ borderColor }) =>
      borderColor && BackgroundColor(borderColor)};
    box-shadow: 0px 17px 16px -11px rgba(0, 0, 0, 0.1);
  }
`;
const Icon = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding-left: 7px;
  height: auto;
  width: auto;
`;

export default TextArea;
