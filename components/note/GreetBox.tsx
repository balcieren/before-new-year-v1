import styled from "styled-components";
import Image from "next/image";
import Button from "components/main/Button";
import { RiStickyNote2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";

const GreetBox = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "afterChildren",
        staggerChildren: 3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          Hello , welcome 👋
        </Title>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
        >
          Let's write your last note before new year
        </Text>
      </Section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <Section
          animate={{
            translateY: [-5, 0, -5],
            transition: { duration: 1, repeat: Infinity },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Image src="/images/note_taking.svg" height={175} width={175} />
        </Section>
      </motion.div>
    </Card>
  );
};

const Card = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.7rem;
`;
const Title = styled(motion.h1)``;
const Text = styled(motion.p)``;
export default GreetBox;
