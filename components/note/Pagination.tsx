import Link from "next/link";
import { EffectCallback, FC, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BackgroundColor } from "theme/GlobalStyle";
import { ScrollTo } from "react-scroll-to";
interface NotesPropsType {
  defaultPage: number;
  notes: [];
  onScroll?(): void;
}

const Pagination: FC<NotesPropsType> = ({ notes, defaultPage, onScroll }) => {
  const router = useRouter();
  var pages = [];
  const pagesLength = notes.length / 10;
  for (var i = 0; i < Number(pagesLength); i++) {
    pages.push(i);
  }

  return (
    <Container>
      {pages.map((page, index) => (
        <Button
          selectedPage={page + 1 == defaultPage ? true : false}
          onClick={async () => {
            await onScroll();
            router.push(`/notes/?page=${page + 1}`);
          }}
          key={index}
        >
          {page + 1}
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  flex-wrap: wrap;
`;

const Button = styled.button<{ selectedPage: boolean }>`
  position: relative;
  border-radius: 100%;
  outline: none;
  border: none;
  height: 32px;
  width: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 3px;
  transition: all 0.3s ease;
  background: ${({ selectedPage }) =>
    selectedPage
      ? BackgroundColor("primary")
      : `linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  )`};
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  transition: color 0.15s ease, border-color 0.15s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  :hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

export default Pagination;
