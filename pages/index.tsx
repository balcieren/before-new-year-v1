import styled from "styled-components";
import Image from "next/image";
import { motion, Variant, Variants } from "framer-motion";
import { rgba } from "polished";
import { RiHeart2Line, RiUserLine } from "react-icons/ri";
import Button from "components/main/Button";
import Link from "next/link";
import Head from "next/head";
import Modal from "react-modal";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const text: Variants = {
  hidden: { translateX: -1000 },
  show: { translateX: 0 },
};
const button: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 1 } },
};

export default function Home() {
  return (
    <Grid>
      <FirstSection>
        <Head>
          <title>Before New Year</title>
        </Head>
        <TextSection variants={container} initial="hidden" animate="show">
          <Text variants={text}>Leave </Text>
          <Text variants={text}>A note</Text>
          <Text variants={text}>Before new year</Text>
          <br />
          <motion.div variants={button}>
            <Link href="/notes/?page=1">
              <a>
                <LetsDo size="lg">Let's Do</LetsDo>
              </a>
            </Link>
          </motion.div>
        </TextSection>
        <ImageSection
          initial={{ translateX: 1000 }}
          animate={{ translateX: 0 }}
        >
          <ImageMoveSection
            style={{ overflow: "hidden" }}
            animate={{
              translateY: [-8, 0, -8],
              transition: { duration: 1, repeat: Infinity },
            }}
            whileHover={{ rotate: 5 }}
          >
            <Image src="/images/party.svg" height={600} width={600} />
          </ImageMoveSection>
        </ImageSection>
      </FirstSection>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 80vh;
  overflow-x: hidden;
`;

const FirstSection = styled.section`
  display: grid;
  grid-template-columns: 40vw 60vw;
  @media (max-width: 1000px) {
    justify-content: center;
    aligitems: center;
    grid-template-columns: 90vw !important;
  } ;
`;
const Section = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const TextSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5rem;
  word-break: break-word;
  text-align: center;
  @media (max-width: 1000px) {
    align-items: center;
    padding-left: 0rem;
  }
`;

const ImageSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  @media (max-width: 1000px) {
    display: none;
  } ;
`;
const Text = styled(motion.p)`
  color: #9f6cff;
  font-weight: 600;
  letter-spacing: 2px;

  font-size: 3.5em;
  @media (max-width: 1000px) {
    font-size: 3em;
  }
  @media (max-width: 470px) {
    align-items: center;
    font-size: 2.4em;
  }
`;
const ImageMoveSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const LetsDo = styled(Button)`
  position: relative;
  outline: none;
  border: none;
  font-size: 1em;
  border-radius: 1rem;
  padding: 16px 64px;
  cursor: pointer;
  color: white;

  backdrop-filter: blur(1px);
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  ::selection {
    background: transparent;
  }
  background: linear-gradient(45deg, #f40076, #df98fa);
  box-shadow: 0px 13px 24px -7px ${rgba("#f40076", 0.7)};
  :hover,
  :active {
    box-shadow: 0px 17px 16px -11px ${rgba("#df98fa", 0.4)};
    transform: translateY(-5px);
  }
`;
