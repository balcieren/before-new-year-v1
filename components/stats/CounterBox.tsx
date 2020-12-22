import styled from "styled-components";
import Modal from "react-modal";
import Counter from "./Counter";
import { motion } from "framer-motion";
import { FC } from "react";
const CounterBox: FC = () => {
  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Title>New Year Countdown to 2021</Title>
      </Section>
      <Section>
        <Counter />
      </Section>
    </Card>
  );
};

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: flex-start;
  background: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  height: 10rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  :hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Section = styled(motion.section)`
  width: 100%;
  height: 100%;
`;
const Title = styled.h1``;
const Text = styled.p``;
export default CounterBox;
