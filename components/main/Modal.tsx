import { motion, AnimatePresence } from "framer-motion";
import { rgba } from "polished";
import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import Button from "./Button";
const Modal = ({ children, show, setShow }) => {
  return (
    <AnimatePresence onExitComplete={() => setShow(false)}>
      {show && (
        <BackgroundLayout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Container
            initial={{ translateY: "-100vh" }}
            animate={{ translateY: "0vh" }}
            exit={{ translateY: "-100vh" }}
          >
            <CloseButton
              onClick={() => setShow((value) => !value)}
              circle
              icon={<RiCloseLine />}
            />
            {children}
          </Container>
        </BackgroundLayout>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const Container = styled(motion.div)`
  position: relative;
  background: ${rgba("#ffffff", 0.5)};
  border-radius: 15px;
  width: auto;
  height: auto;
  z-index: 6;
`;

const BackgroundLayout = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 5;
`;
